function DeliveryTracker({ deliveries }) {

  const getStatusColor = (status) => {

    switch (status) {

      case "Preparing":
        return "bg-blue-100 text-blue-700";

      case "On The Way":
        return "bg-yellow-100 text-yellow-700";

      case "Delivered":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";

    }

  };

  if (deliveries.length === 0) {

    return (

      <div
        className="
        text-center
        py-16
        text-gray-500
        "
      >

        <div className="text-6xl mb-4">
          🚚
        </div>

        <h2
          className="
          text-2xl
          font-bold
          "
        >
          No Deliveries Available
        </h2>

        <p className="mt-2">
          Delivery information will appear here.
        </p>

      </div>

    );

  }

  return (

    <div
      className="
      grid
      lg:grid-cols-2
      gap-6
      "
    >

      {deliveries.map((delivery) => (

        <div
          key={delivery.id}
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

          {/* Header */}

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
                Delivery #{delivery.id}
              </h3>

              <p className="text-gray-500 text-sm">
                Live Delivery Status
              </p>

            </div>

            <span
              className={`
              px-4
              py-2
              rounded-full
              text-sm
              font-semibold
              ${getStatusColor(delivery.status)}
              `}
            >
              {delivery.status}
            </span>

          </div>

          {/* Information */}

          <div className="space-y-4">

            <div className="flex justify-between">

              <span className="text-gray-500">
                Delivery ID
              </span>

              <span className="font-semibold text-gray-800">
                #{delivery.id}
              </span>

            </div>

            <div className="flex justify-between">

              <span className="text-gray-500">
                Current Status
              </span>

              <span className="font-semibold">
                {delivery.status}
              </span>

            </div>

            {/* Progress */}

            <div className="pt-4">

              <div className="flex justify-between text-sm text-gray-500 mb-2">

                <span>Progress</span>

                <span>
                  {delivery.status === "Preparing"
                    ? "30%"
                    : delivery.status === "On The Way"
                    ? "70%"
                    : "100%"}
                </span>

              </div>

              <div
                className="
                w-full
                bg-gray-200
                rounded-full
                h-3
                "
              >

                <div
                  className={`
                  h-3
                  rounded-full
                  ${
                    delivery.status === "Preparing"
                      ? "w-1/3 bg-blue-500"
                      : delivery.status === "On The Way"
                      ? "w-2/3 bg-yellow-500"
                      : "w-full bg-green-500"
                  }
                  `}
                />

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  );

}

export default DeliveryTracker;