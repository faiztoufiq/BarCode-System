"use client";
import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { data } from "@/app/(dashboard)/Products/data";
import { counterContext } from "@/context/page";
import { dashBoardText } from "@/common/constant";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DashboardProps {
  isDrawerOpen: boolean;
}

const Dashboard: React.FC<DashboardProps> = () => {
  const { open, totalPrice, orders } = useContext(counterContext);

  const productNames = data.map((product) => product.name);
  const productPrices = data.map((product) => product.price);

  const barData = {
    labels: productNames,
    datasets: [
      {
        label: dashBoardText.productPrice,
        data: productPrices,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: dashBoardText.productPrices,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8 mt-4">
      <div
        className={`transition-all duration-300 ease-in-out ${
          open ? "ml-64" : "ml-16"
        }`}
      >
        <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">
          {dashBoardText.productStatistics}
        </h2>

        <div className="flex justify-center mb-12">
          <div className="w-full max-w-xl p-6 bg-white shadow-lg rounded-lg border-t-4 border-blue-300">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6 transition transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              {dashBoardText.totalSales}
            </h3>
            <p className="text-3xl font-bold text-blue-900">${totalPrice}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 transition transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              {dashBoardText.productsSold}
            </h3>
            <p className="text-3xl font-bold text-blue-900">{orders.length}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 transition transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              {dashBoardText.averagePrice}
            </h3>
            <p className="text-3xl font-bold text-blue-900">
              {dashBoardText.averageRate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
