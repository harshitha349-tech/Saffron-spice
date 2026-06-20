import { createContext, useState } from "react";
import ordersData from "../services/orderService";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(ordersData);

  const updateStatus = (id, status) => {
    setOrders(
      orders.map((order) =>
        order.id === id
          ? { ...order, status }
          : order
      )
    );
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        updateStatus
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};