import { useContext, useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import AnalyticsPanel from "../components/AnalyticsPanel";
import InsightsPanel from "../components/InsightsPanel";

import { getRecipes } from "../services/recipeService";
import { initialFoods } from "../services/foodService";
import { OrderContext } from "../context/OrderContext";
import { useTheme } from "../context/ThemeContext";

function Dashboard() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Live order data already shared across the app via OrderContext
  const { orders } = useContext(OrderContext);
  const { darkMode } = useTheme();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getRecipes();
        setRecipes(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-2xl font-bold text-slate-600">
        Loading Dashboard...
      </div>
    );
  }

  // ---- Recipe stats (top stat cards) ----
  const totalRecipes = recipes.length;

  const avgRating =
    recipes.length > 0
      ? (
          recipes.reduce((acc, recipe) => acc + recipe.rating, 0) /
          recipes.length
        ).toFixed(1)
      : 0;

  const cuisines = new Set(recipes.map((recipe) => recipe.cuisine)).size;

  const easyRecipes = recipes.filter(
    (recipe) => recipe.difficulty === "Easy"
  ).length;

  const stats = [
    { title: "Recipes", value: totalRecipes, icon: "🍽" },
    { title: "Rating", value: avgRating, icon: "⭐" },
    { title: "Cuisines", value: cuisines, icon: "🌎" },
    { title: "Easy Recipes", value: easyRecipes, icon: "🥗" },
  ];

  // ---- Real order + menu stats (Business Insights panel) ----
  const totalOrders = orders.length;
  const totalMenu = initialFoods.length;

  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  return (
    <div className={`min-h-screen ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 md:p-8 space-y-8">
          {/* Welcome banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 text-white p-8 md:p-10 shadow-lg shadow-orange-200">
            {/* decorative soft circles, purely cosmetic */}
            <div className="absolute -right-10 -top-16 w-56 h-56 rounded-full bg-white/10" />
            <div className="absolute right-10 -bottom-16 w-44 h-44 rounded-full bg-white/10" />

            <div className="relative z-10 max-w-2xl">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Welcome back 👋
              </h1>

              <p className="mt-3 text-orange-50/90 leading-relaxed">
                Manage your restaurant, orders, menu and customer reviews
                from one dashboard.
              </p>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <StatCard
                key={index}
                title={item.title}
                value={item.value}
                icon={item.icon}
              />
            ))}
          </div>

          {/* Analytics + Quick Actions */}
          <div className="grid lg:grid-cols-2 gap-6">
            <AnalyticsPanel />

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-800">
                Quick Actions
              </h2>
              <p className="text-sm text-slate-500 mt-1 mb-6">
                Jump straight into the things you do most
              </p>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-start gap-2 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-2xl p-4 font-semibold transition-colors">
                  <span className="text-2xl">🍔</span>
                  Add Menu
                </button>

                <button className="flex flex-col items-start gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-2xl p-4 font-semibold transition-colors">
                  <span className="text-2xl">🧾</span>
                  Orders
                </button>

                <button className="flex flex-col items-start gap-2 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 rounded-2xl p-4 font-semibold transition-colors">
                  <span className="text-2xl">⭐</span>
                  Reviews
                </button>

                <button className="flex flex-col items-start gap-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-2xl p-4 font-semibold transition-colors">
                  <span className="text-2xl">🚚</span>
                  Delivery
                </button>
              </div>
            </div>
          </div>

          {/* Business Insights + Today's Summary */}
          <div className="grid lg:grid-cols-2 gap-6">
            <InsightsPanel
              totalOrders={totalOrders}
              totalMenu={totalMenu}
              pendingOrders={pendingOrders}
              deliveredOrders={deliveredOrders}
            />

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-6">
                Today's Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Total Recipes</span>
                  <span className="font-semibold text-slate-800">
                    {totalRecipes}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Average Rating</span>
                  <span className="font-semibold text-slate-800">
                    {avgRating}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Cuisines</span>
                  <span className="font-semibold text-slate-800">
                    {cuisines}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Easy Recipes</span>
                  <span className="font-semibold text-slate-800">
                    {easyRecipes}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      
    </div>
  );
}

export default Dashboard;