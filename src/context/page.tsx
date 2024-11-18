"use client";
import React, { createContext, ReactNode, useState, useEffect } from "react";

interface ContextProviderProps {
  children: ReactNode;
}

interface OrderDetails {
  code: string;
  status: string;
  name: string;
  price: number;
  image: string;
}

interface CounterContextType {
  open: boolean;
  setOpen: (value: boolean) => void;
  orders: OrderDetails[];
  totalPrice: number;
  productCode: string;
  setOrders: (orders: OrderDetails[]) => void;
  setTotalPrice: (value: number) => void;
  setProductCode: (value: string) => void;
}

export const counterContext = createContext<CounterContextType>({
  open: false,
  setOpen: () => {},
  orders: [],
  totalPrice: 0,
  setOrders: () => {},
  setTotalPrice: () => {},
  productCode: "",
  setProductCode: () => {},
});

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);
  const [orders, setOrders] = useState<OrderDetails[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productCode, setProductCode] = useState("");

  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      const ordersArray: OrderDetails[] = JSON.parse(savedOrders);
      setOrders(ordersArray);

      const total = ordersArray.reduce(
        (accumulator, order) => accumulator + order.price,
        0
      );
      setTotalPrice(total);
    }
  }, []);

  const contextValue: CounterContextType = {
    open,
    setOpen,
    orders,
    setOrders,
    totalPrice,
    productCode,
    setProductCode,
    setTotalPrice,
  };

  return (
    <counterContext.Provider value={contextValue}>
      {children}
    </counterContext.Provider>
  );
};
