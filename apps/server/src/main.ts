import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { SignUpResolver } from "./modules/user/SignUp";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import { redis } from "./redis";
import { LoginResolver } from "./modules/user/Login";
import { MeResolver } from "./modules/user/Me";
import { LogoutResolver } from "./modules/user/Logout";
import { ConfirmUserEmailResolver } from "./modules/user/ConfirmUserEmail";
import { ForgotPasswordResolver } from "./modules/user/ForgotPassword";
import { ChangePasswordResolver } from "./modules/user/ChangePassword";
import { User } from "./entity/User";

const main = async () => {
  await createConnection({
    name: "default",
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_NAME || "nextjs-graphql-starter",
    logging: false,
    synchronize: true,
    entities: [User],
  });

  const schema = await buildSchema({
    resolvers: [
      ChangePasswordResolver,
      ConfirmUserEmailResolver,
      ForgotPasswordResolver,
      LoginResolver,
      LogoutResolver,
      MeResolver,
      SignUpResolver,
    ],
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
    playground: {
      settings: {
        "request.credentials": "include",
      },
    },
  });

  const app = express();
  const RedisStore = connectRedis(session);

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:4200",
    }),
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis,
      }),
      name: process.env.SESSION_NAME || "qid",
      secret: process.env.SESSION_SECRET || "abc123",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365,
      },
    }),
  );

  apolloServer.applyMiddleware({ app, cors: false });

  const port = process.env.port || 3333;

  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/graphql`);
  });
  server.on("error", console.error);
};

main();
