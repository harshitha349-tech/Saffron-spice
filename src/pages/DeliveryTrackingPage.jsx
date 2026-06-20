import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

import DeliveryTracker from "../components/DeliveryTracker";
import DeliveryStatusUpdater from "../components/DeliveryStatusUpdater";

function DeliveryTrackingPage() {

  // Dark mode comes from ThemeContext — toggled globally in Navbar
  const { darkMode } = useTheme();

  // Same color logic as DeliveryTracker, so the badge below
  // actually reflects each delivery's real status
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

  const [deliveries, setDeliveries] =
    useState([
      {
        id: 1,
        status: "Preparing"
      },
      {
        id: 2,
        status: "On The Way"
      }
    ]);

  const updateDeliveryStatus =
    (id, status) => {

      setDeliveries(

        deliveries.map((delivery)=>

          delivery.id === id
            ? {
                ...delivery,
                status
              }
            : delivery

        )

      );

    };

  const preparingCount =
    deliveries.filter(
      d => d.status === "Preparing"
    ).length;

  const onWayCount =
    deliveries.filter(
      d => d.status === "On The Way"
    ).length;

  const deliveredCount =
    deliveries.filter(
      d => d.status === "Delivered"
    ).length;

  const stats = [

    {
      title: "Total Deliveries",
      value: deliveries.length,
      icon: "🚚"
    },

    {
      title: "Preparing",
      value: preparingCount,
      icon: "📦"
    },

    {
      title: "On The Way",
      value: onWayCount,
      icon: "🛵"
    },

    {
      title: "Delivered",
      value: deliveredCount,
      icon: "✅"
    }

  ];

  return (

    <div className={`min-h-screen ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>

      <Navbar />

      <div className="flex">

        <Sidebar />

        <main className="flex-1 p-8">

          {/* Header */}

          <div
            className="
            bg-gradient-to-r
            from-green-500
            to-emerald-600
            rounded-3xl
            p-8
            text-white
            shadow-lg
            mb-8
            "
          >

            <h1
              className="
              text-4xl
              font-bold
              "
            >
              🚚 Delivery Tracking
            </h1>

            <p className="mt-2 text-green-100">

              Monitor delivery progress and update
              delivery status in real time.

            </p>

          </div>

          {/* Stats */}

          <div
            className="
            grid
            lg:grid-cols-4
            md:grid-cols-2
            gap-6
            mb-8
            "
          >

            {stats.map((item,index)=>(

              <StatCard

                key={index}

                title={item.title}

                value={item.value}

                icon={item.icon}

              />

            ))}

          </div>

          {/* Delivery Overview */}

          <div
            className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
            mb-8
            "
          >

            <h2
              className="
              text-2xl
              font-bold
              text-gray-800
              mb-5
              "
            >
              Delivery Overview
            </h2>

            <DeliveryTracker
              deliveries={deliveries}
            />

          </div>

          {/* Delivery Cards */}

          <div
            className="
            grid
            lg:grid-cols-2
            gap-6
            "
          >

            {deliveries.map((delivery)=>(

              <div

                key={delivery.id}

                className="
                bg-white
                rounded-2xl
                shadow-md
                p-6
                "

              >

                <div
                  className="
                  flex
                  justify-between
                  items-center
                  mb-5
                  "
                >

                  <h3
                    className="
                    text-xl
                    font-bold
                    text-gray-800
                    "
                  >
                    Delivery #{delivery.id}
                  </h3>

                  <span
                    className={`
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-semibold
                    ${getStatusColor(delivery.status)}
                    `}
                  >
                    {delivery.status}
                  </span>

                </div>

                <p
                  className="
                  text-gray-500
                  mb-5
                  "
                >
                  Update the delivery status below.
                </p>

                <DeliveryStatusUpdater

                  delivery={delivery}

                  updateDeliveryStatus={
                    updateDeliveryStatus
                  }

                />

              </div>

            ))}

          </div>

        </main>

      </div>

    </div>

  );

}

export default DeliveryTrackingPage;