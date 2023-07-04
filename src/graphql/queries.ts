import { graphql } from './gql/gql';

const GET_PRODUCTS = graphql(/* GraphQL */ `
  query GetProducts {
    products {
      items {
        id
        name
        description
        variants {
          price
          currencyCode
        }
        assets {
          preview
        }
      }
      totalItems
    }
  }
`);

export { GET_PRODUCTS };
