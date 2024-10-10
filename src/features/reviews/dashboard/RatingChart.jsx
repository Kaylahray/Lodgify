import React from "react";
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

// Sample data
const reviews = [
  { category: "Facilities", score: 4.4 },
  { category: "Cleanliness", score: 4.7 },
  { category: "Services", score: 4.6 },
  { category: "Comfort", score: 4.8 },
  { category: "Location", score: 4.5 },
];

// Compute total and average using reduce
const totalScore = reviews.reduce(
  (acc, review) => acc + (review.score || 0),
  0
); // Ensure no undefined values
const overallRating = (totalScore / reviews.length).toFixed(1);
const totalReviews = 2546; // Example static value

const RatingChart = () => {
  return (
    <div>
      {/* Overall Rating Section */}
      <div className="flex items-center mb-4">
        <div className="bg-green-100 text-green-600 p-2 rounded-lg mr-2">
          <span className="text-2xl font-bold">{overallRating}</span>
          <span className="text-sm">/5</span>
        </div>
        <div>
          <h2 className="font-bold text-lg">Impressive</h2>
          <p className="text-xs text-gray-500">
            from {totalReviews} reviews
          </p>
        </div>
      </div>

      {/* Ratings per category */}
      <div className="space-y-2">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            <span className="text-sm">{review.category}</span>
            <ResponsiveContainer width="60%" height={8}>
              <BarChart
                data={reviews}
                // Ensure no NaN by using a fallback value
                barSize={6}
                layout="vertical"
              >
                <XAxis
                  type="number"
                  domain={[0, 5]} // Fixed domain to avoid issues
                  hide
                />
                <Bar
                  dataKey="score"
                  fill="#FCE482"
                  radius={[10, 10, 10, 10]}
                />
              </BarChart>
            </ResponsiveContainer>
            <span className="ml-2 text-sm">{review.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingChart;
