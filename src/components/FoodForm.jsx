import { useState, useRef, useEffect } from "react";

function FoodForm({ onSave, editingFood }) {
  const [name, setName] = useState(editingFood?.name || "");
  const [category, setCategory] = useState(editingFood?.category || "");
  const priceRef = useRef();

  // Whenever a different food gets selected for editing (or editing is
  // cleared), refresh the form fields to match it.
  useEffect(() => {
    setName(editingFood?.name || "");
    setCategory(editingFood?.category || "");

    if (priceRef.current) {
      priceRef.current.value = editingFood?.price || "";
    }
  }, [editingFood]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const price = Number(priceRef.current.value);

    if (!name.trim() || !category.trim() || price <= 0) {
      alert("Enter valid data");
      return;
    }

    onSave({
      id: editingFood?.id || Date.now(),
      name,
      category,
      price,
    });

    setName("");
    setCategory("");

    if (priceRef.current) {
      priceRef.current.value = "";
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6"
    >
      <h2 className="text-xl font-bold text-slate-800 mb-4">
        {editingFood ? "Edit Food" : "Add Food"}
      </h2>

      <div className="grid sm:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Food Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        <input
          type="number"
          ref={priceRef}
          defaultValue={editingFood?.price || ""}
          placeholder="Price"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
        {editingFood ? "Update Food" : "Save Food"}
      </button>
    </form>
  );
}

export default FoodForm;