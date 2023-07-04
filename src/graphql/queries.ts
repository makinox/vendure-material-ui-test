import { graphql } from './gql/gql';

const GET_PRODUCTS = graphql(`
  query GetProducts {
    products {
      items {
        id
        name
        description
        variants {
          id
          price
          name
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
