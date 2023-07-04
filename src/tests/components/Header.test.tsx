import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { OrderProvider } from '@/contexts/order';
import { Header } from '@/components';

describe('Header tests', () => {
  test('should render chip with orders subtotal', () => {
    render(
      <OrderProvider>
        <Header />
      </OrderProvider>
    );

    const chipLabel = screen.getByText('$0.00');

    expect(chipLabel).toBeInTheDocument();
  });

  test('renders the Santex logo with the correct source', () => {
    render(
      <OrderProvider>
        <Header />
      </OrderProvider>
    );

    const logoElement = screen.getByAltText('Santex logo');

    expect(logoElement).toHaveAttribute(
      'src',
      'https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png'
    );
  });
});
