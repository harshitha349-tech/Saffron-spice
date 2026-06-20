import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FoodForm from "../components/FoodForm";
import MenuList from "../components/MenuList";
import CategoryFilter from "../components/CategoryFilter";

import { initialFoods } from "../services/foodService";

function MenuManagement() {
  const { darkMode } = useTheme();
  const [foods, setFoods] = useState(initialFoods);
  const [editingFood, setEditingFood] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSave = (food) => {
    if (editingFood) {
      setFoods(
        foods.map((item) => (item.id === food.id ? food : item))
      );
      setEditingFood(null);
    } else {
      setFoods([...foods, food]);
    }
  };

  const handleDelete = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  const categories = [...new Set(foods.map((food) => food.category))];

  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter((food) => food.category === selectedCategory);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 md:p-8 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Menu Management
            </h1>
            <p className="text-slate-500 mt-1">
              Add, edit, and organize the dishes on your menu
            </p>
          </div>

          <FoodForm onSave={handleSave} editingFood={editingFood} />

          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-lg font-semibold text-slate-700">
              {filteredFoods.length}{" "}
              {filteredFoods.length === 1 ? "item" : "items"}
            </h2>

            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          <MenuList
            foods={filteredFoods}
            onEdit={setEditingFood}
            onDelete={handleDelete}
          />
        </main>
      </div>
    </div>
  );
}

export default MenuManagement;