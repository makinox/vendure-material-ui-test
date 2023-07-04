import { graphql } from './gql/gql';

const ADD_ITEM_TO_ORDER = graphql(`
  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ... on Order {
        id
        subTotalWithTax
      }
    }
  }
`);

export { ADD_ITEM_TO_ORDER };
