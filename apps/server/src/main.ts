import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema, Resolver, Query } from "type-graphql";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { RegisterResolver } from "./modules/user/Register";

@Resolver()
class HelloWorldResolver {
  @Query(() => String)
  async hello() {
    return "Hello, World";
  }
}

const main = async () => {
  await createConnection({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "nextjs-graphql-starter",
    logging: true,
    synchronize: true,
    entities: [User],
  });

  const schema = await buildSchema({
    resolvers: [HelloWorldResolver, RegisterResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  const app = express();

  apolloServer.applyMiddleware({ app });

  const port = process.env.port || 3333;

  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/graphql`);
  });
  server.on("error", console.error);
};

main();