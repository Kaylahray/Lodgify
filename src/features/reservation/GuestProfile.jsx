import React from "react";

const GuestProfile = () => {
  return (
    <div className="flex justify-between p-6 bg-gray-100 min-h-screen">
      {/* Left Sidebar: Profile Section */}
      <div className="w-1/4 bg-white rounded-lg p-4 shadow">
        <ProfileSection />
      </div>

      {/* Center Section: Booking Info */}
      <div className="w-1/2 bg-white rounded-lg p-6 shadow mx-4">
        <BookingInfo />
      </div>

      {/* Right Sidebar: Room Info and Price Summary */}
      <div className="w-1/4">
        <div className="bg-white rounded-lg p-4 shadow mb-4">
          <RoomInfo />
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <PriceSummary />
        </div>
      </div>
    </div>
  );
};

const ProfileSection = () => (
  <div>
    <div className="flex items-center gap-4">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
        className="rounded-full w-20 h-20"
      />
      <div>
        <h2 className="font-semibold text-xl">Angus Copper</h2>
        <p className="text-gray-500 text-sm">G011-987654321</p>
      </div>
    </div>
    <div className="mt-4">
      <p className="text-sm text-gray-700">
        Phone: +1 (555) 789-1234
      </p>
      <p className="text-sm text-gray-700">
        Email: angus.copper@example.com
      </p>
    </div>
    <div className="mt-6">
      <h4 className="font-semibold text-sm">Loyalty Program</h4>
      <p className="text-green-600 text-sm">Platinum Member</p>
      <p className="text-sm">Points Balance: 15,000</p>
      <p className="text-sm">Tier: Elite</p>
    </div>
  </div>
);

const BookingInfo = () => (
  <div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-bold text-2xl">Booking ID: LG-B00109</h2>
      <span className="text-sm text-green-600">
        Booking Confirmed
      </span>
    </div>
    <div className="text-sm text-gray-700">
      <p>
        <strong>Room Type:</strong> Deluxe
      </p>
      <p>
        <strong>Room Number:</strong> 101
      </p>
      <p>
        <strong>Guests:</strong> 2 Adults
      </p>
      <p>
        <strong>Check-In:</strong> June 19, 2024, 1:45 PM
      </p>
      <p>
        <strong>Check-Out:</strong> June 22, 2024, 11:45 AM
      </p>
      <p>
        <strong>Duration:</strong> 3 nights
      </p>
    </div>
    <div className="mt-4">
      <h4 className="font-semibold text-md">Special Amenities</h4>
      <ul className="text-sm text-gray-700">
        <li>Platinum Member</li>
        <li>Airport Pickup Arranged</li>
      </ul>
    </div>
    <div className="mt-4 flex justify-between">
      <button className="px-4 py-2 bg-yellow-500 text-white rounded">
        Edit
      </button>
      <button className="px-4 py-2 bg-red-500 text-white rounded">
        Cancel Booking
      </button>
    </div>
  </div>
);

const RoomInfo = () => (
  <div>
    <img
      src="https://via.placeholder.com/150"
      alt="Room"
      className="w-full rounded-md mb-4"
    />
    <p className="text-sm text-gray-700">35 m², King Bed, 2 Guests</p>
  </div>
);

const PriceSummary = () => (
  <div>
    <h4 className="font-semibold text-md mb-4">Price Summary</h4>
    <ul className="text-sm text-gray-700">
      <li>Room and Offer: $450.00</li>
      <li>Extras: $30.00</li>
      <li>City Tax: $49.50</li>
      <li>
        <strong>Total Price: $533.50</strong>
      </li>
    </ul>
    <p className="mt-2 text-xs text-gray-500">
      Notes: Invoice sent to corporate account; payment confirmed by
      BIC Corporation.
    </p>
  </div>
);

export default GuestProfile;
