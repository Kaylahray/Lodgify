import { useEffect, useState } from "react";

const ratings = [
  { category: "Facilities", rating: 4.4 },
  { category: "Cleanliness", rating: 4.4 },
  { category: "Services", rating: 4.6 },
  { category: "Comfort", rating: 4.8 },
  { category: "Food and Dining", rating: 4.5 },
];

const AnimatedProgressBar = ({ rating }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Animate the width after a slight delay
    setTimeout(() => {
      setWidth((rating / 5) * 100); // Convert rating (out of 5) to percentage
    }, 300);
  }, [rating]);

  return (
    <div className="w-full bg-gray-400 h-2 rounded-full relative overflow-hidden">
      <div
        className="h-full bg-green-200 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      >
        {/* Optional animated overlay */}
        {/* <div className="h-full bg-green-300 opacity-70 w-full absolute left-0 animate-progress"></div> */}
      </div>
    </div>
  );
};
const ProgressBar = () => {
  return (
    <div className="w-full mt-6">
      {ratings.map((item) => (
        <div
          key={item.category}
          className="flex flex-col items-start gap-1"
        >
          <p className="text-sm">{item.category}</p>
          <div className=" flex items-center gap-2 w-full">
            <AnimatedProgressBar rating={item.rating} />
            <span className="text-sm font-semibold">
              {item.rating}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
