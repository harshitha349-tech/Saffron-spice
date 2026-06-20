import { useTheme } from "../context/ThemeContext";
import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import OrderDetails from "../components/OrderDetails";

import { OrderContext } from "../context/OrderContext";

const OrderDetailsPage = () => {
  const { darkMode } = useTheme();

  // The id in the URL is always a string, order.id in our data is a number
  const { id } = useParams();
  const { orders } = useContext(OrderContext);

  const order = orders.find((o) => o.id === Number(id));

  return (
    <div className={`min-h-screen ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 md:p-8">
          <Link
            to="/orders"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-600 font-medium mb-6"
          >
            ← Back to Orders
          </Link>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 md:p-8">
            <OrderDetails order={order} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderDetailsPage;