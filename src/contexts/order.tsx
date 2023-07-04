import { createContext, useContext, useMemo } from 'react';

import useStateWithStorage from '@/hooks/useStateWithStorage';
import { ORDER_STORAGE_KEY } from '@/constants';
import { deepCopy } from '@/utils';

type AppOrder = {
  id: string;
  subTotal: number;
};

interface State {
  orders: Array<AppOrder>;
  ordersSubtotal: number;
  saveOrder: (order: AppOrder) => void;
  removeOrder: (orderId: string) => void;
}

const OrderContext = createContext<State | undefined>(undefined);

export function OrderProvider({ children }: { children: JSX.Element }) {
  const { storage: orders, setStorage } = useStateWithStorage<State['orders']>(
    ORDER_STORAGE_KEY,
    []
  );

  const ordersSubtotal = useMemo(() => {
    return orders.reduce(
      (accumulator, currentObject) => accumulator + currentObject.subTotal,
      0
    );
  }, [orders]);

  const saveOrder = (order: AppOrder) => {
    setStorage((prevStorage) => {
      const copiedOrders = deepCopy(prevStorage);
      copiedOrders.push(order);
      return copiedOrders;
    });
  };

  function removeOrder(orderId: string) {
    setStorage((prevStorage) => {
      const copiedOrders = deepCopy(prevStorage);
      const orderIndex = orders.findIndex((element) => element.id === orderId);
      copiedOrders.splice(orderIndex, 1);
      return copiedOrders;
    });
  }

  return (
    <OrderContext.Provider
      value={{ orders, ordersSubtotal, saveOrder, removeOrder }}
    >
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
