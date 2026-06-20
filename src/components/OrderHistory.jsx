import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

// Shows only delivered orders, pulled straight from OrderContext.
// Used inside pages/OrderHistoryPage.jsx
const OrderHistory = () => {
  const { orders } = useContext(OrderContext);

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  );

  if (deliveredOrders.length === 0) {
    return (
      <div className="text-center py-12 text-slate-500 text-lg">
        📦 No delivered orders yet
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {deliveredOrders.map((order) => (
        <div
          key={order.id}
          className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 flex items-center justify-between"
        >
          <div>
            <h3 className="text-lg font-bold text-slate-800">
              Order #{order.id}
            </h3>
            <p className="text-slate-500 text-sm mt-1">
              {order.customer} · {order.items.join(", ")}
            </p>
            <p className="text-slate-400 text-xs mt-1">{order.date}</p>
          </div>

          <div className="text-right">
            <p className="font-bold text-green-600 text-lg">
              ₹{order.total}
            </p>
            <span className="inline-block mt-1 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
              Delivered
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;