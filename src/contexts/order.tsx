import { createContext, useContext, useState } from 'react';

type State = {
  orders: any;
  saveOrder: () => void;
  removeOrder: () => void;
};

const OrderContext = createContext<State | undefined>(undefined);

export function OrderProvider({ children }: { children: JSX.Element }) {
  const [orders, setOrder] = useState([]);

  const saveOrder = () => {};

  const removeOrder = () => setOrder([]);

  return (
    <OrderContext.Provider value={{ orders, saveOrder, removeOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined)
    throw new Error('useOrder must be used within a OrderProvider');

  return context;
}
