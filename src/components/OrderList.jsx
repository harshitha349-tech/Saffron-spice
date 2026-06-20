import { useContext } from "react";

import { OrderContext } from "../context/OrderContext";
import OrderCard from "./OrderCard";

const OrderList = ({ onSelect }) => {

  const { orders } =
    useContext(OrderContext);

  if (orders.length === 0) {

    return (

      <div
        className="
        text-center
        py-12
        text-gray-500
        text-lg
        "
      >
        📦 No Orders Available
      </div>

    );

  }

  return (

    <div>

      {/* Header */}

      <div
        className="
        flex
        justify-between
        items-center
        mb-6
        "
      >

        <div>

          <h2
            className="
            text-2xl
            font-bold
            text-gray-800
            "
          >
            Customer Orders
          </h2>

          <p
            className="
            text-gray-500
            text-sm
            "
          >
            Select any order to view complete details.
          </p>

        </div>

        <div
          className="
          bg-orange-100
          text-orange-700
          font-semibold
          px-4
          py-2
          rounded-full
          "
        >
          {orders.length} Orders
        </div>

      </div>

      {/* Order Cards */}

      <div
        className="
        space-y-5
        "
      >

        {orders.map((order) => (

          <OrderCard

            key={order.id}

            order={order}

            onSelect={onSelect}

          />

        ))}

      </div>

    </div>

  );

};

export default OrderList;