"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { data } from "./data";
import { counterContext } from "../../../context/page";
import { productsText } from "@/common/constant";
import { copyToClipboard } from "./data";

const Dashboard: React.FC = () => {
  const { open } = React.useContext(counterContext);

  return (
    <>
      <ToastContainer />
      <div className="h-screen bg-gray-50">
        <div
          className={`flex items-center justify-center mt-4 ${
            open ? "ml-64" : "ml-1"
          }`}
        >
          <div className="h-[600px] w-full overflow-scroll rounded-lg shadow-lg bg-white p-4">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              {productsText.products}
            </h2>
            <ul className="space-y-4">
              {data.map((product) => (
                <li
                  key={product.code}
                  className="flex items-center justify-between py-4 px-6 bg-gray-200 rounded-lg shadow-md cursor-pointer hover:bg-gray-300 transition-all duration-200 ease-in-out"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 rounded-md object-cover shadow-lg"
                    />
                    <div className="flex flex-col">
                      <div>
                        <span className="text-lg font-medium text-gray-700">
                          {product.name}
                        </span>
                      </div>
                      <div>
                        <span className="text-lg font-medium text-gray-700">
                          {productsText.dollar}
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      copyToClipboard(product);
                      setTimeout(() => {
                        window.location.href = "/Generate-Order";
                      }, 2000);
                    }}
                    className="text-sm text-black focus:outline-none"
                  >
                    <span>{productsText.copyToClipboard}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
