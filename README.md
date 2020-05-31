# nextjs-graphql-starter

>A (WIP) monorepo Next.js starter with basic authentication.

## Live demo

TODO:

## Built with

* TypeScript

### Frontend

* Next.js
* Material UI
* Styled Components
* Apollo Client

### Backend

* Express
* Apollo Server
* PostgreSQL
* Redis

## Roadmap / features

- [x] Login / logout using sessions
- [x] Password reset (backend only, frontend WIP)
- [x] Confirmation email (backend only, frontend WIP)
- [x] GraphQL code generation
- [ ] PWA
- [ ] User profile details editing
- [ ] Image uploading

## Getting started

1. Install packages with `yarn` or `npm`

2. Either create a user called `postgres` with password `postgres` and a database called `nextjs-graphql-starter` or update the values in `@server/main` to what you have set up locally

3. (Optional) install `nx` globally with `npm install -g @nrwl/cli`

4. Use `nx serve server` to start the server

5. Use `nx serve client` to start the client

