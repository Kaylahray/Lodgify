import { useEffect, useState } from "react";

const ratings = [
  { category: "Facilities", rating: 4.4 },
  { category: "Cleanliness", rating: 4.7 },
  { category: "Services", rating: 4.6 },
  { category: "Comfort", rating: 4.8 },
  { category: "Location", rating: 4.5 },
];

// Component for the animated progress bar
const AnimatedProgressBar = ({ rating }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animate the width of the progress bar based on the rating
    setTimeout(() => {
      setWidth((rating / 5) * 100); // Convert rating (out of 5) to percentage
    }, 300);
  }, [rating]);

  return (
    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
      <div
        className="h-full bg-customYellow rounded-full transition-all duration-1000"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

// Component for displaying ratings and overall review summary
const ProgressBar = () => {
  const overallRating = 4.6;
  const totalReviews = 2566;

  return (
    <div className=" w-full max-w-sm">
      {/* Overall Rating Section */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mt-2">
          <div className="bg-customBlue text-customBlack px-3 py-1 rounded-full">
            <span className="text-2xl font-bold">
              {overallRating}
            </span>
            <span className="text-sm">/5</span>
          </div>
          <div className="text-gray-500">
            <p className="text-sm">Impressive</p>
            <p className="text-xs">from {totalReviews} reviews</p>
          </div>
        </div>
      </div>

      {/* Ratings by category */}
      <div className="space-y-3">
        {ratings.map((item) => (
          <div
            key={item.category}
            className="flex items-center gap-4"
          >
            <p className="text-sm w-24">{item.category}</p>
            <div className="flex-1">
              <AnimatedProgressBar rating={item.rating} />
            </div>
            <span className="text-sm font-semibold">
              {item.rating}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
