import { graphql } from './gql/gql';

const GET_PRODUCTS = graphql(`
  query GetProducts($skip: Int, $take: Int) {
    products(options: { skip: $skip, take: $take }) {
      items {
        id
        name
        description
        variants {
          id
          priceWithTax
          name
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
