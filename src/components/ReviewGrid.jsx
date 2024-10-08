import StarRating from "./StarRating";

const reviews = [
  {
    name: "John Manulang",
    date: "June 12, 2024",
    rating: 5,
    review:
      "Fantastic stay! The room was exceptionally clean and comfortable, and the staff were incredibly helpful and friendly. The location was perfect for a walk. Highly recommend this hotel to anyone visiting the area!",
  },
  {
    name: "Suki Matsuda",
    date: "June 14, 2024",
    rating: 4,
    review:
      "Great location and very friendly staff. The room was nice, cozy, and had an amazing view. The breakfast was a little limited but very tasty. It provided us with a very good experience! I would stay here again.",
  },
  {
    name: "Dominic Wong",
    date: "June 16, 2024",
    rating: 4,
    review:
      "The room seemed a little old but was comfy. Make sure to book with air conditioning since it's hot in this season. The breakfast menu wasn't anything special, which made the room quite warm at night.",
  },
  {
    name: "Isla de Lacosta",
    date: "June 18, 2024",
    rating: 5,
    review:
      "Stunning service and a beautiful hotel. The staff went above and beyond to assist with any questions, which I thoroughly enjoyed. This hotel surely delivered an experience that truly resonates. Will definitely return!",
  },
];

const ReviewGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="p-4 bg-white shadow-md rounded-lg"
        >
          <div className="flex items-center">
            <div className="bg-green-100 p-4 rounded-full mr-3"></div>
            <div>
              <h3 className="font-bold">{review.name}</h3>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
          </div>
          <div className="mt-2">
            <StarRating rating={review.rating} />
          </div>
          <p className="mt-2 text-gray-700">{review.review}</p>
        </div>
      ))}
    </div>
  );
};
export default ReviewGrid;
