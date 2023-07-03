import { graphql } from './gql/gql';

const GET_PRODUCTS = graphql(/* GraphQL */ `
  query GetProducts {
    products {
      items {
        id
        name
        variants {
          price
          stockLevel
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
