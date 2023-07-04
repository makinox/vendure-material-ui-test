import { render, act, screen } from '@testing-library/react';
import { OrderProvider, useOrder } from '@/contexts/order';

describe('OrderContext', () => {
  test('should throw an error if used outside of OrderProvider', () => {
    const Component = () => {
      useOrder();
      return <div />;
    };

    expect(() => {
      render(<Component />);
    }).toThrow('useOrder must be used within a OrderProvider');
  });

  test('should provide the correct context values', () => {
    const TestComponent = () => {
      const { orders, ordersSubtotal, saveOrder, removeOrder } = useOrder();
      return (
        <>
          <div data-testid="orders">{JSON.stringify(orders)}</div>
          <div data-testid="ordersSubtotal">{ordersSubtotal}</div>
          <button onClick={() => saveOrder({ id: '1', subTotal: 10 })}>
            Save Order
          </button>
          <button onClick={() => removeOrder('1')}>Remove Order</button>
        </>
      );
    };

    render(
      <OrderProvider>
        <TestComponent />
      </OrderProvider>
    );

    const ordersElement = screen.getByTestId('orders');
    const ordersSubtotalElement = screen.getByTestId('ordersSubtotal');
    const saveOrderButton = screen.getByText('Save Order');
    const removeOrderButton = screen.getByText('Remove Order');

    expect(ordersElement.textContent).toBe('[]');
    expect(ordersSubtotalElement.textContent).toBe('0');

    act(() => {
      saveOrderButton.click();
    });

    expect(ordersElement.textContent).toBe('[{"id":"1","subTotal":10}]');
    expect(ordersSubtotalElement.textContent).toBe('10');

    act(() => {
      removeOrderButton.click();
    });

    expect(ordersElement.textContent).toBe('[]');
    expect(ordersSubtotalElement.textContent).toBe('0');
  });
});
