module.exports = {
  schema: ["http://localhost:3333/graphql"],
  documents: ["apps/client/**/*.tsx", "apps/client/**/*.ts"],
  overwrite: true,
  generates: {
    "libs/graphql/src/lib/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "libs/graphql/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
