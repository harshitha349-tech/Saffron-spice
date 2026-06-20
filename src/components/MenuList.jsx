import { useState } from "react";
import { FaEdit, FaTrash, FaUtensils } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function MenuList({ foods, onEdit, onDelete }) {
  const { darkMode } = useTheme();

  if (foods.length === 0) {
    return (
      <div className={`rounded-3xl border p-10 text-center ${
        darkMode ? "bg-slate-800 border-slate-700 text-slate-400" : "bg-white border-slate-200 text-slate-500"
      }`}>
        No food items in this category yet.
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          darkMode={darkMode}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

// Separate component so each card tracks its own "did the image fail" state
function FoodCard({ food, darkMode, onEdit, onDelete }) {
  // Once true, we stop trying to load any image and show the icon placeholder
  // instead — this needs zero network calls, so it can never go blank.
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className={`rounded-3xl border shadow-sm hover:shadow-md transition-shadow overflow-hidden ${
        darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
      }`}
    >
      {/* Food image — or a fallback icon block if it fails / is missing */}
      {food.image && !imageFailed ? (
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-40 object-cover"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div
          className={`w-full h-40 flex items-center justify-center ${
            darkMode ? "bg-slate-700" : "bg-orange-50"
          }`}
        >
          <FaUtensils className={`text-4xl ${darkMode ? "text-slate-500" : "text-orange-300"}`} />
        </div>
      )}

      {/* Card body */}
      <div className="p-4">
        <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-2">
          {food.category}
        </span>

        <h3 className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-800"}`}>
          {food.name}
        </h3>

        <p className={`mt-1 font-semibold ${darkMode ? "text-orange-400" : "text-orange-600"}`}>
          ₹{food.price}
        </p>

        {/* Action buttons */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => onEdit(food)}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-xl font-medium transition-colors text-sm"
          >
            <FaEdit /> Edit
          </button>

          <button
            onClick={() => onDelete(food.id)}
            className="flex-1 flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-700 px-4 py-2 rounded-xl font-medium transition-colors text-sm"
          >
            <FaTrash /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuList;