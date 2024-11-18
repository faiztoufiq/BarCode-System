"use client";
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { generatedOrderText } from "@/common/constant";
import { generateOrder } from "./generateOrder";
import { counterContext } from "@/context/page";

interface OrderDetails {
  code: string;
  status: string;
  name: string;
  price: string;
  image: string;
}

export default function Order() {
  const { open } = React.useContext(counterContext);
  const [productCode, setProductCode] = useState("");
  const [orders, setOrders] = useState<OrderDetails[]>([]);

  const handleGenerateOrder = () => {
    generateOrder(productCode, setOrders, orders);
  };

  useEffect(() => {
    const savedOrders = localStorage.getItem(generatedOrderText.orders);
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const clearOrders = () => {
    setOrders([]);
    localStorage.removeItem(generatedOrderText.orders);
  };

  return (
    <div className="h-screen bg-white mt-4">
      <ToastContainer />
      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          open ? "ml-80" : "ml-4"
        }`}
      >
        <h2 className="text-2xl mt-2 font-semibold mb-2 text-black">
          {generatedOrderText.currentOrders}
        </h2>
        <div className="space-x-5 flex ">
          <input
            type="text"
            placeholder="Paste product code here"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
            className={`p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              open ? "w-[800px]" : "w-[1050px]"
            }`}
          />

          <button
            onClick={handleGenerateOrder}
            className="p-3 w-1/4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {generatedOrderText.generateOrder}
          </button>
        </div>

        <div className="flex justify-between items-center mt-4">
          <h3 className="text-xl font-semibold text-black">
            {generatedOrderText.orderDetails}
          </h3>
          <button
            onClick={clearOrders}
            className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            {generatedOrderText.clearOrders}
          </button>
        </div>

        {orders && orders.length > 0 ? (
          <div className="mt-6  h-[450px] overflow-y-scroll rounded-lg">
            <div className="grid grid-cols-1 gap-6">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-md"
                >
                  <h4 className="font-semibold text-lg text-gray-800">
                    {generatedOrderText.productDetails}
                  </h4>
                  <div className="flex justify-between">
                    <div>
                      <div className="flex flex-col mt-2 space-y-2">
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">
                            {generatedOrderText.name}
                          </span>{" "}
                          {order.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">
                            {generatedOrderText.price}
                          </span>{" "}
                          {order.price}
                        </p>
                      </div>
                      <p className="text-lg font-medium text-gray-700 mt-4">
                        <span className="font-semibold">
                          {generatedOrderText.status}
                        </span>{" "}
                        {order.status}
                      </p>
                    </div>
                    {order.image && (
                      <div className="flex justify-center items-center">
                        <img
                          src={order.image}
                          alt={order.name}
                          className="w-24 h-24 object-cover rounded-lg shadow-md"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-black flex justify-center mt-20">
            {generatedOrderText.noOrdersYet}
          </p>
        )}
      </div>
    </div>
  );
}
