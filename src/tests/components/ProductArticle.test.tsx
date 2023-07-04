import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { ADD_ITEM_TO_ORDER } from '@/graphql/mutations';
import { OrderProvider } from '@/contexts/order';
import { ProductArticle } from '@/components';
import { generateRandomId } from '@/utils';

const product = {
  id: '1',
  name: 'Test Product',
  description: 'This is a test product',
  assets: [{ preview: 'test-image.png' }],
  variants: [
    { id: '1', name: 'Variant 1', priceWithTax: 10.99 },
    { id: '2', name: 'Variant 2', priceWithTax: 15.99 },
  ],
};

const mocks = [
  {
    request: {
      query: ADD_ITEM_TO_ORDER,
      variables: { productVariantId: '1', quantity: 1 },
    },
    result: {
      data: {
        addItemToOrder: { id: generateRandomId(10) },
      },
    },
  },
];

describe('ProductArticle', () => {
  test('renders product details and buy button', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <OrderProvider>
          <ProductArticle product={product} />
        </OrderProvider>
      </MockedProvider>
    );

    const productName = screen.getByText('Test Product');
    const productDescription = screen.getByText('This is a test product');
    const buyButton = screen.getByRole('button', { name: /buy/i });

    expect(productName).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
    expect(buyButton).toBeInTheDocument();
  });

  test('displays error message when adding item to order fails', async () => {
    const errorMocks = [
      {
        request: {
          query: ADD_ITEM_TO_ORDER,
          variables: { productVariantId: '1', quantity: 1 },
        },
        error: new Error('Failed to add item to order'),
      },
    ];

    render(
      <MockedProvider mocks={errorMocks} addTypename={false}>
        <OrderProvider>
          <ProductArticle product={product} />
        </OrderProvider>
      </MockedProvider>
    );

    const buyButton = screen.getByRole('button', { name: /buy/i });

    fireEvent.click(buyButton);

    await waitFor(() => {
      const tryAgainButton = screen.getByRole('button', { name: /try again/i });

      expect(tryAgainButton).toBeInTheDocument();
    });
  });
});
