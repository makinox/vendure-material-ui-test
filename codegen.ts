import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://demo.vendure.io/shop-api/shop-api',
  documents: ['./src/graphql/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphql/gql/': {
      preset: 'client',
    },
  },
};

export default config;
