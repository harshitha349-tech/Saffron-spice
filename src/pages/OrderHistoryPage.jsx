import { useTheme } from "../context/ThemeContext";
import { useContext, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import OrderHistory from "../components/OrderHistory";

import { OrderContext } from "../context/OrderContext";

const OrderHistoryPage = () => {
  const { darkMode } = useTheme();
  const { orders } = useContext(OrderContext);

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  );

  const totalRevenue = deliveredOrders.reduce(
    (sum, order) => sum + order.total,
    0
  );

  const uniqueCustomers = new Set(
    deliveredOrders.map((order) => order.customer)
  ).size;

  const stats = [
    { title: "Delivered", value: deliveredOrders.length, icon: "✅" },
    { title: "Revenue", value: `₹${totalRevenue}`, icon: "💰" },
    { title: "Customers", value: uniqueCustomers, icon: "👥" },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 md:p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Order History
            </h1>
            <p className="text-slate-500 mt-1">
              A record of every order that's been delivered
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <StatCard
                key={index}
                title={item.title}
                value={item.value}
                icon={item.icon}
              />
            ))}
          </div>

          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-slate-800">
                Delivered Orders
              </h2>

              <span className="bg-green-100 text-green-700 font-semibold px-4 py-2 rounded-full text-sm">
                {deliveredOrders.length} delivered
              </span>
            </div>

            <OrderHistory />
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderHistoryPage;