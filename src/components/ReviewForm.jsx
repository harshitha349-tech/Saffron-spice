import { useState } from "react";

function ReviewForm({ addReview }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      alert("Fill all fields");
      return;
    }

    addReview({
      id: Date.now(),
      name,
      rating,
      comment,
    });

    setName("");
    setRating(5);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-slate-700 font-medium mb-2">
          Customer Name
        </label>

        <input
          type="text"
          placeholder="Enter customer name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div>
        <label className="block text-slate-700 font-medium mb-2">
          Rating
        </label>

        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          <option value={1}>⭐ 1 Star</option>
          <option value={2}>⭐⭐ 2 Stars</option>
          <option value={3}>⭐⭐⭐ 3 Stars</option>
          <option value={4}>⭐⭐⭐⭐ 4 Stars</option>
          <option value={5}>⭐⭐⭐⭐⭐ 5 Stars</option>
        </select>
      </div>
      
      <div>
        <label className="block text-slate-700 font-medium mb-2">
          Review
        </label>

        <textarea
          rows="5"
          placeholder="Write your feedback..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition-colors"
      >
        Submit Review ⭐
      </button>
    </form>
  );
}

export default ReviewForm;