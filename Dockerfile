FROM node:12 AS nextjs-graphql-starter-base
WORKDIR /app
COPY . .
RUN yarn install --production

FROM node:12 AS nextjs-graphql-starter-server
EXPOSE 3333
WORKDIR /app
COPY --from=nextjs-graphql-starter-base /app/node_modules /app/node_modules
COPY --from=nextjs-graphql-starter-base /app/dist/apps/server .
CMD ["node", "main.js"]
