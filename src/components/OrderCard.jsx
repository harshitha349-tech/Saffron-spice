const OrderCard = ({ order, onSelect }) => {

  const getStatusColor = (status) => {

    switch (status) {

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Preparing":
        return "bg-blue-100 text-blue-700";

      case "Out for Delivery":
        return "bg-purple-100 text-purple-700";

      case "Delivered":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";

    }

  };

  return (

    <div
      className="
      bg-white
      border
      border-gray-200
      rounded-2xl
      shadow-sm
      hover:shadow-lg
      transition-all
      duration-300
      p-6
      "
    >

      {/* Top */}

      <div
        className="
        flex
        justify-between
        items-center
        mb-5
        "
      >

        <div>

          <h3
            className="
            text-xl
            font-bold
            text-gray-800
            "
          >
            Order #{order.id}
          </h3>

          <p
            className="
            text-gray-500
            text-sm
            "
          >
            Customer Order
          </p>

        </div>

        <span
          className={`
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
            ${getStatusColor(order.status)}
          `}
        >
          {order.status}
        </span>

      </div>

      {/* Customer */}

      <div className="space-y-3">

        <div className="flex justify-between">

          <span className="text-gray-500">
            Customer
          </span>

          <span className="font-semibold text-gray-800">
            {order.customer}
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-gray-500">
            Total Amount
          </span>

          <span
            className="
            font-bold
            text-green-600
            "
          >
            ₹{order.total}
          </span>

        </div>

      </div>

      {/* Button */}

      <button
        onClick={() => onSelect(order)}
        className="
        w-full
        mt-6
        bg-orange-500
        hover:bg-orange-600
        text-white
        py-3
        rounded-xl
        font-semibold
        transition-all
        duration-300
        "
      >
        View Order Details
      </button>

    </div>

  );

};

export default OrderCard;