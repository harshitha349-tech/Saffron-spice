import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

import ReviewForm from "../components/ReviewForm";
import ReviewList from "../components/ReviewList";

function ReviewsPage() {
  const { darkMode } = useTheme();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("reviews");

    if (stored) {
      setReviews(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  const totalReviews = reviews.length;

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce(
            (sum, review) => sum + Number(review.rating),
            0
          ) / reviews.length
        ).toFixed(1)
      : 0;

  const fiveStarReviews = reviews.filter(
    (review) => Number(review.rating) === 5
  ).length;

  const stats = [
    { title: "Reviews", value: totalReviews, icon: "📝" },
    { title: "Avg Rating", value: averageRating, icon: "⭐" },
    { title: "5 Star", value: fiveStarReviews, icon: "🏆" },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? "bg-slate-900" : "bg-slate-50"}`}>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 md:p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Customer Reviews
            </h1>
            <p className="text-slate-500 mt-1">
              See what customers are saying and add new feedback
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {stats.map((item, index) => (
              <StatCard
                key={index}
                title={item.title}
                value={item.value}
                icon={item.icon}
              />
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-5">
                Add Review
              </h2>

              <ReviewForm addReview={addReview} />
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-5">
                Customer Feedback
              </h2>

              <ReviewList reviews={reviews} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ReviewsPage;