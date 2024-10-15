import React from "react";
import { NavLink, useParams } from "react-router-dom";
import MoreOptionCard from "../../components/MoreOptionCard";
import { useReservation } from "../../hooks/usePage";
import {
  Stroke,
  Phone,
  EnvelopeOpen,
  Medal,
  Guest,
  Bed,
  Size,
} from "../../assets/assets";
import InfoItem from "./InfoItem";

const GuestProfile = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useReservation();
  const reservationData = data?.[0]?.reservations || [];
  // {
  //   console.log(id);
  // }]

  const filtered = reservationData.filter((item) => item.id === id);
  console.log(filtered);

  return (
    <div className="grid grid-cols-[1fr_3fr] gap-6">
      <MoreOptionCard title="Profile">
        <ProfileSection />
      </MoreOptionCard>
      {/* Center Section: Booking Inf */}

      <BookingInfo />
    </div>
  );
};

const ProfileSection = () => (
  <div>
    <div className="flex items-center gap-4 my-5">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
        className="rounded-full w-20 h-20"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-black text-[22px] font-bold leading-[26.4px]">
          Angus Copper
        </h2>
        <p className="text-gray-10 font-lato text-[12px] font-normal leading-[16.8px]">
          G011-987654321
        </p>
      </div>
    </div>
    <Stroke />

    <div className="my-5 flex flex-col gap-[9px]">
      <div className="flex items-center gap-2">
        <div className="p-1 rounded bg-[#D5F6E5]">
          <Phone />
        </div>
        <p className="text-customBlack text-[12px] font-normal leading-[16.8px]">
          Phone: +1 (555) 789-1234
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="p-1 rounded bg-[#D5F6E5]">
          <EnvelopeOpen />
        </div>
        <p className="text-customBlack text-[12px] font-normal leading-[16.8px]">
          angus.copper@example.com
        </p>
      </div>
    </div>
    <Stroke />
    <div className="my-5 flex flex-col gap-2.5">
      <p className="text-[#0D0E0D]  text-[14px] font-semibold leading-[140%]">
        Personal Information
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <p className="text-[#6E6E6E]  text-[10px] font-normal leading-[140%]">
            Date of Birth
          </p>
          <p className="text-[#0D0E0D] text-[12px] font-normal leading-[140%]">
            June 15, 1985
          </p>
        </div>
        <div>
          <p className="text-[#6E6E6E]  text-[10px] font-normal leading-[140%]">
            Gender
          </p>
          <p className="text-[#0D0E0D] text-[12px] font-normal leading-[140%]">
            Male
          </p>
        </div>{" "}
        <div>
          <p className="text-[#6E6E6E]  text-[10px] font-normal leading-[140%]">
            Nationality
          </p>
          <p className="text-[#0D0E0D] text-[12px] font-normal leading-[140%]">
            American
          </p>
        </div>{" "}
        <div>
          <p className="text-[#6E6E6E]  text-[10px] font-normal leading-[140%]">
            Passport No.
          </p>
          <p className="text-[#0D0E0D] text-[12px] font-normal leading-[140%]">
            A12345678
          </p>
        </div>
      </div>
    </div>
    <Stroke />

    <div className="my-5 flex flex-col gap-2.5">
      <p className="text-[#0D0E0D]  text-[14px] font-semibold leading-[140%]">
        Loyalty Program
      </p>
      <div className="flex flex-col gap-[2px]">
        <p className="text-[#6E6E6E]  text-[10px] font-normal leading-[140%]">
          Membership Status
        </p>
        <div className="flex justify-center items-center w-fit gap-[10px] p-[2px_6px_3px_6px] text-customBlack text-[12px] font-normal leading-[140%] rounded-[4px] bg-[#E7F68E]">
          Platinum member
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex flex-col gap-[2px]">
          <p className="text-[#6E6E6E]  text-[10px] font-normal leading-[140%]">
            Points balancer
          </p>
          <p className="text-[#0D0E0D] text-[12px] font-normal leading-[140%]">
            15,000 points
          </p>
        </div>{" "}
        <div className="flex flex-col gap-[2px]">
          <p className="text-[#6E6E6E]  text-[10px] font-normal leading-[140%]">
            Tier Level
          </p>
          <p className="text-[#0D0E0D] text-[12px] flex items-center font-normal leading-[140%]">
            <Medal className="ml-2" /> <span>Elite</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const BookingInfo = () => {
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-4 bg-white rounded-md">
      <MoreOptionCard title="Booking Info">
        <div className="p-4 border border-gray-300 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Booking Confirmed</h2>
            <span className="text-xl font-semibold text-[#0D0E0D]">
              LG-B00109
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <InfoItem label="Room Type" value="Deluxe" />
            <InfoItem label="Room Number" value="101" />
            <InfoItem label="Price" value="$150/night" />
            <InfoItem label="Guests" value="2 Adults" />
            <InfoItem label="Check In" value="June 19, 2024" />
            <InfoItem label="Check Out" value="June 22, 2024" />
            <InfoItem label="Duration" value="3 nights" />
          </div>

          <div className="mt-4">
            <p className="text-[#6E6E6E] text-[10px] font-normal leading-[140%]">
              Notes
            </p>
            <p className="text-[#0D0E0D] text-[12px] font-normal leading-[140%]">
              Guest requested extra pillows and towels. Ensure room
              service is available upon arrival.
            </p>
          </div>

          <div className="mt-4">
            <InfoItem
              label="Loyalty Program"
              value="Platinum Member"
            />
            <InfoItem
              label="Special Amenities"
              value="Complimentary breakfast, Free Wi-Fi, Access to gym and pool"
            />
          </div>
        </div>
      </MoreOptionCard>
      <div className="p-4">
        <div className="flex flex-col w-[288px] p-[16px] items-start gap-[16px] self-stretch rounded-[8px] bg-[#F8F8F8]">
          <div className="flex justify-between w-full">
            <span className="text-[#0D0E0D]  text-base font-medium leading-5">
              Room Details
            </span>
            <p>View Details</p>
          </div>
          <img
            src="https://via.placeholder.com/100"
            alt="Room"
            className="w-[256px] h-[163px] "
          />
          <div className="text-customBlack text-[12px] flex gap-[17px] font-normal leading-[140%]">
            <span className="flex gap-1.5">
              <Size />
              25m
            </span>
            <span className="flex gap-1.5">
              <Bed /> King Bed
            </span>
            <span className="flex gap-1.5">
              <Guest /> 2 Guests
            </span>
          </div>
          <Stroke />
        </div>
        <div>
          <h4 className="font-semibold text-md mb-4">
            Price Summary
          </h4>
          <ul className="text-sm text-gray-700">
            <li>Room and Offer: $450.00</li>
            <li>Extras: $30.00</li>
            <li>City Tax: $49.50</li>
            <li>
              <strong>Total Price: $533.50</strong>
            </li>
          </ul>
          <p className="mt-2 text-xs text-gray-500">
            Notes: Invoice sent to corporate account; payment
            confirmed by BIC Corporation.
          </p>
        </div>
      </div>
    </div>
  );
};

// <div>
//   <div className="flex justify-between items-center mb-4">
//     <h2 className="font-bold text-2xl">Booking ID: LG-B00109</h2>
//     <span className="text-sm text-green-600">
//       Booking Confirmed
//     </span>
//   </div>
//   <div className="text-sm text-gray-700">
//     <p>
//       <strong>Room Type:</strong> Deluxe
//     </p>
//     <p>
//       <strong>Room Number:</strong> 101
//     </p>
//     <p>
//       <strong>Guests:</strong> 2 Adults
//     </p>
//     <p>
//       <strong>Check-In:</strong> June 19, 2024, 1:45 PM
//     </p>
//     <p>
//       <strong>Check-Out:</strong> June 22, 2024, 11:45 AM
//     </p>
//     <p>
//       <strong>Duration:</strong> 3 nights
//     </p>
//   </div>
//   <div className="mt-4">
//     <h4 className="font-semibold text-md">Special Amenities</h4>
//     <ul className="text-sm text-gray-700">
//       <li>Platinum Member</li>
//       <li>Airport Pickup Arranged</li>
//     </ul>
//   </div>
//   <div className="mt-4 flex justify-between">
//     <button className="px-4 py-2 bg-yellow-500 text-white rounded">
//       Edit
//     </button>
//     <button className="px-4 py-2 bg-red-500 text-white rounded">
//       Cancel Booking
//     </button>
//   </div>
// </div>

export default GuestProfile;
