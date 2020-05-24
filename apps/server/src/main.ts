import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema, Resolver, Query } from "type-graphql";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { RegisterResolver } from "./modules/user/Register";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { redis } from "./redis";
import { LoginResolver } from "./modules/user/Login";

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
    resolvers: [HelloWorldResolver, RegisterResolver, LoginResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }) => ({ req }),
  });

  const app = express();
  const RedisStore = connectRedis(session);

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    }),
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis,
      }),
      name: "qid",
      secret: "abc123",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365,
      },
    }),
  );

  apolloServer.applyMiddleware({ app });

  const port = process.env.port || 3333;

  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/graphql`);
  });
  server.on("error", console.error);
};

main();
