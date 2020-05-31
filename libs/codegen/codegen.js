module.exports = {
  schema: ["http://localhost:3333/graphql"],
  documents: ["apps/client/**/*.tsx", "apps/client/**/*.ts"],
  overwrite: true,
  generates: {
    "libs/codegen/src/lib/generated/graphql.tsx": {
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
    "libs/codegen/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
