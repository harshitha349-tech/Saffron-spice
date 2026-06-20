import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import OrderList from "../components/OrderList";

function OrderManagement() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  // OrderList already reads live orders from OrderContext, so this page
  // just needs to decide what happens when an order is clicked.
  const handleSelectOrder = (order) => {
    navigate(`/orders/${order.id}`);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 md:p-8">
          <OrderList onSelect={handleSelectOrder} />
        </main>
      </div>
    </div>
  );
}

export default OrderManagement;