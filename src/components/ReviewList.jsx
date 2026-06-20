function ReviewList({ reviews }) {
  if (reviews.length === 0) {
    return (
      <div className="text-center text-slate-500 py-10 text-lg">
        No Reviews Yet ⭐
      </div>
    );
  }

  return (
    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
      {reviews.map((review, index) => (
        <div
          key={review.id || index}
          className="bg-white border border-slate-200 rounded-2xl p-5 text-slate-700 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold text-slate-800">
              👤 {review.name}
            </h3>

            <span className="bg-amber-50 text-amber-600 font-semibold px-3 py-1 rounded-full text-sm">
              ⭐ {review.rating}/5
            </span>
          </div>

          <div className="text-amber-500 text-lg mb-3">
            {"⭐".repeat(review.rating)}
          </div>

          <div className="bg-slate-50 rounded-xl p-4">
            <p>{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;