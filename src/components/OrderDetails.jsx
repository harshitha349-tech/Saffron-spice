import StatusUpdater from "./StatusUpdater";

const OrderDetails = ({ order }) => {
  if (!order) {
    return (
      <div
        className="
        flex
        items-center
        justify-center
        h-64
        text-white
        text-xl
        font-semibold
        "
      >
        📦 Select an Order to View Details
      </div>
    );
  }

  return (
    <div className="text-white">

      <div
        className="
        flex
        justify-between
        items-center
        mb-6
        "
      >
        <h2
          className="
          text-3xl
          font-bold
          "
        >
          Order #{order.id}
        </h2>

        <span
          className="
          px-4
          py-2
          rounded-full
          bg-blue-500/30
          text-sm
          "
        >
          {order.status}
        </span>
      </div>

      <div
        className="
        grid
        md:grid-cols-2
        gap-4
        mb-6
        "
      >
        <div
          className="
          bg-white/10
          rounded-2xl
          p-4
          "
        >
          <h3 className="font-semibold mb-2">
            Customer
          </h3>

          <p>{order.customer}</p>
        </div>

        <div
          className="
          bg-white/10
          rounded-2xl
          p-4
          "
        >
          <h3 className="font-semibold mb-2">
            Order Value
          </h3>

          <p>₹{order.total}</p>
        </div>
      </div>

      <div
        className="
        bg-white/10
        rounded-2xl
        p-5
        mb-6
        "
      >
        <h3
          className="
          text-xl
          font-semibold
          mb-3
          "
        >
          🍽 Ordered Items
        </h3>

        <ul
          className="
          space-y-2
          "
        >
          {order.items.map(
            (item, index) => (
              <li
                key={index}
                className="
                bg-white/10
                p-3
                rounded-xl
                "
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>

      <div
        className="
        bg-white/10
        rounded-2xl
        p-5
        "
      >
        <h3
          className="
          text-xl
          font-semibold
          mb-3
          "
        >
           Update Status
        </h3>

        <StatusUpdater order={order} />
      </div>

    </div>
  );
};

export default OrderDetails;