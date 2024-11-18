"use client";
import React, { useState, useEffect, useContext } from "react";
import { counterContext } from "@/context/page";
import { invoiceText } from "@/common/constant";
import { printInvoice } from "./handleInvoice";

export default function Order() {
  const { open, totalPrice, orders, setOrders, setTotalPrice } =
    useContext(counterContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedOrders = localStorage.getItem(invoiceText.orders);
    if (savedOrders) {
      const ordersArray = JSON.parse(savedOrders);
      setOrders(ordersArray);

      const total = ordersArray.reduce(
        (accumulator: any, order: { price: any }) => accumulator + order.price,
        0
      );

      console.log(total);
      setTotalPrice(total);
    }
  }, []);

  const handlePrintInvoice = () => {
    printInvoice(setOrders, setTotalPrice);
  };
  if (!isClient) {
    return null;
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col items-center p-4 mt-4">
      <h2
        className={`text-2xl font-semibold text-gray-800 mb-1 ${
          open ? "ml-64" : "ml-16"
        }`}
      >
        {invoiceText.currentOrders}
      </h2>
      <div className={`${open ? "ml-64" : "ml-16"}`}>
        <div
          id="invoice"
          className="w-full max-w-4xl h-[450px] overflow-y-auto mt-4 p-6 bg-white rounded-lg shadow-lg border border-gray-200"
        >
          <div className="invoice-header text-center mb-1">
            <h2 className="text-2xl font-bold text-gray-800">
              {invoiceText.invoice}
            </h2>
            <p className="text-gray-500">
              {invoiceText.thankYouForYourPurchase}
            </p>
          </div>

          <div className="invoice-details flex justify-between border-b pb-2 mb-4">
            <p className="text-gray-700 font-semibold">
              {invoiceText.date} {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="invoice-body">
            {orders.map((order, index) => (
              <div
                key={index}
                className="invoice-item flex justify-between items-center py-2 border-b border-gray-200"
              >
                <div>
                  <p className="font-semibold text-gray-800">{order.name}</p>
                  <p className="text-sm text-gray-600">
                    {invoiceText.code} {order.code}
                  </p>
                  <p className="text-sm text-gray-600">
                    {invoiceText.status} {order.status}
                  </p>
                </div>
                <p className="font-semibold text-gray-800">
                  {invoiceText.dollar}
                  {order.price}
                </p>
              </div>
            ))}
          </div>

          <div className="invoice-footer mt-4 text-right">
            <p className="font-semibold text-xl text-gray-800">
              {invoiceText.total}
              {totalPrice}
            </p>
          </div>
        </div>
        <div className="mt-4 ">
          <button
            onClick={handlePrintInvoice}
            className={`px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 w-[900px]`}
          >
            {invoiceText.printInvoice}
          </button>
        </div>
      </div>
    </div>
  );
}
