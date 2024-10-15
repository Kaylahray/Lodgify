import React, { useState } from "react";
import SecondLayoutCard from "../components/SecondLayoutCard";
import CaretSelect from "../components/CaretSelect";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import { Size, Guest, Bed } from "../assets/assets";
import DetailsFeatures from "../features/rooms/DetailsFeatures";
import SingleFeature from "../features/rooms/SingleFeature";
import {
  Coffee,
  Wifi,
  Wind,
  Monitor,
  Vault,
  SnowFlake,
} from "../assets/assets";

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // State to track the selected room

  return (
    <div className=" gap-6 grid xl:grid-cols-[1.5fr_1fr] bg-white">
      {/* Left Sidebar: Room List */}
      <SecondLayoutCard
        search={
          <SearchBar placeholder="Search room type, number, etc" />
        }
        component={
          <>
            <span className="font-fig text-[12px] font-normal leading-[1.4] text-figGray">
              Sort by:
            </span>
            <CaretSelect btnText="Popular" bg="customG" />
            <CaretSelect btnText="All Type" bg="customG" />
            <Button btnText="Add Room" />
          </>
        }
      >
        <div>
          {/* If selectedRoom is not null, show the RoomDetail only on small screens */}
          <div className="block xl:hidden">
            {selectedRoom ? (
              <RoomDetail
                room={selectedRoom}
                onBack={() => setSelectedRoom(null)}
              />
            ) : (
              <RoomList onSelectRoom={setSelectedRoom} />
            )}
          </div>

          {/* For larger screens, always show the RoomList on the left side */}
          <div className="hidden xl:block ">
            <RoomList onSelectRoom={setSelectedRoom} />
          </div>
        </div>
      </SecondLayoutCard>
      <div className="p-4">
        {/* Right Section: Room Detail on larger screens */}
        <aside className=" inset-y-0 right-0 hidden w-full overflow-y-auto h-full rounded-lg bg-customG  px-4 py-6 sm:px-6 lg:px-8 xl:block">
          {selectedRoom ? (
            <RoomDetail
              room={selectedRoom}
              onBack={() => setSelectedRoom(null)}
            />
          ) : (
            <p>Select a room to view its details.</p>
          )}
        </aside>
      </div>
    </div>
  );
};

const RoomList = ({ onSelectRoom }) => (
  <div className="gap-4 flex flex-col">
    {/* Room Cards */}
    {rooms.map((room) => (
      <RoomCard
        key={room.id}
        room={room}
        onClick={() => onSelectRoom(room)}
      />
    ))}
  </div>
);

const RoomCard = ({ room, onClick }) => (
  <div
    className="flex p-4 items-center gap-7 cursor-pointer rounded-[12px] border border-[#e7e7e7e]"
    onClick={onClick}
  >
    <img
      src={room.image}
      alt={room.type}
      className="w-[180px] h-full object-cover rounded-lg mr-4"
    />

    <div className="flex flex-col items-start gap-4 flex-1">
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-2">
          <span className="text-customBlack text-[24px] font-bold leading-[110%] tracking-[0.48px]">
            {room.type}
          </span>
          <div className="text-customBlack text-[12px] flex gap-[17px] font-normal leading-[140%]">
            <span className="flex gap-1.5">
              <Size />
              {room.size}
            </span>
            <span className="flex gap-1.5">
              <Bed />
              {room.beds}
            </span>
            <span className="flex gap-1.5">
              <Guest />
              {room.guests}
            </span>
          </div>
        </div>
        <span
          className={`text-black font-lato h-fit rounded-md text-[12px] px-2 py-1 font-medium leading-[140%]
            ${
              room.status === "Available"
                ? "bg-customBlue"
                : "bg-customLightYellow"
            }
            `}
        >
          {room.status}
        </span>
      </div>
      <p className="overflow-hidden w-full text-customGray font-lato text-[12px] font-normal leading-[140%]">
        {room.description}
      </p>
      <div className="flex justify-between items-center w-full">
        <span className="text-customGray text-[12px] font-normal ">
          Available:
          <span className="text-customBlack ml-1">
            ${room.price}/night
          </span>
        </span>
        <span className="text-customBlack text-[20px] font-semibold leading-[120%]">
          ${room.price}
          <span className="text-customGray text-[12px] font-normal">
            /night
          </span>
        </span>
      </div>
    </div>
  </div>
);

const RoomDetail = ({ room, onBack }) => (
  <div className="flex flex-col w-full">
    {/* <button onClick={onBack} className="mb-4 text-blue-500">
      Back to Room List
    </button> */}
    <div className="flex justify-between w-full">
      <span className="text-[#0D0E0D]  text-base font-medium leading-5">
        Room Details
      </span>
      <button className="text-[#0D0E0D] text-center  text-xs font-medium leading-[110%] tracking-[0.12px] flex justify-center items-center px-3 py-1.5 rounded-md bg-[#E7F68E]">
        Edit
      </button>
    </div>

    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="text-[#0D0E0D] font-lato text-2xl font-semibold leading-[110%]">
          {room.type}
          <span
            className={`text-black font-lato h-fit rounded-md text-[12px] px-2 py-1 font-medium leading-[140%]
            ${
              room.status === "Available"
                ? "bg-customBlue"
                : "bg-customLightYellow"
            }
            `}
          >
            {room.status}
          </span>
        </div>
        <p>
          Occupied:
          <span>${room.price}/night</span>
        </p>
      </div>
      <div className="grid grid-cols-[2fr_1fr] gap-4">
        {/* Room Image */}
        <div className="w-full">
          <img
            src={room.image}
            alt={room.type}
            className="w-[369px] h-[282px] object-cover rounded-lg"
          />
        </div>
        <div className="grid gap-3">
          <img
            src={room.image}
            alt={room.type}
            className="w-[75px] h-[58px] object-cover rounded-lg"
          />{" "}
          <img
            src={room.image}
            alt={room.type}
            className="w-[75px] h-[58px]  object-cover rounded-lg"
          />{" "}
          <img
            src={room.image}
            alt={room.type}
            className="w-[75px] h-[58px] object-cover rounded-lg"
          />
          <button className=" w-[75px] h-[58px] flex items-center justify-center text-nowrap bg-[#E7F68E]">
            View All
          </button>
        </div>
      </div>
      <div className="text-customBlack text-[12px] flex gap-[17px] font-normal leading-[140%]">
        <span className="flex gap-1.5">
          <Size />
          {room.size}
        </span>
        <span className="flex gap-1.5">
          <Bed />
          {room.beds}
        </span>
        <span className="flex gap-1.5">
          <Guest />
          {room.guests}
        </span>
      </div>
      <p className="overflow-hidden w-full text-customGray font-lato text-[12px] font-normal leading-[140%]">
        {room.description}
      </p>
      <DetailsFeatures title="Features">
        <SingleFeature
          text="Private balcony (where applicable)"
          check={true}
        />
        <SingleFeature
          text="Work desk with ergonomic chair"
          check={true}
        />
        <SingleFeature
          text="Spacious layout with a modern design"
          check={true}
        />
        <SingleFeature
          text="Large windows offering city or garden views"
          check={true}
        />
      </DetailsFeatures>
      <DetailsFeatures title="Facilities" threeCol={true}>
        <SingleFeature
          text="High-speed Wi-Fi"
          others={true}
          icon={<Wifi />}
        />{" "}
        <SingleFeature
          text="In-room safe"
          others={true}
          icon={<Vault />}
        />{" "}
        <SingleFeature
          text="Mini-fridge"
          others={true}
          icon={<SnowFlake />}
        />{" "}
        <SingleFeature
          text="Flat-screen TV"
          others={true}
          icon={<Monitor />}
        />{" "}
        <SingleFeature
          text="Air conditioning"
          others={true}
          icon={<Wind />}
        />{" "}
        <SingleFeature
          text="Coffee/tea maker"
          others={true}
          icon={<Coffee />}
        />{" "}
      </DetailsFeatures>
      <DetailsFeatures title="Amenities">
        <SingleFeature
          text="Complimentary bottled water"
          check={true}
        />{" "}
        <SingleFeature text="Luxury toiletries" check={true} />{" "}
        <SingleFeature
          text="Coffee and tea making facilities"
          check={true}
        />{" "}
        <SingleFeature text="Hairdryer" check={true} />{" "}
        <SingleFeature
          text="Premium bedding and linens"
          check={true}
        />{" "}
        <SingleFeature text="Bathrobe and slippers" check={true} />{" "}
        <SingleFeature
          text="Ensuite bathroom with shower and bathtub"
          check={true}
        />{" "}
        <SingleFeature text="24-hour room service" check={true} />
      </DetailsFeatures>
    </div>
  </div>
);

const rooms = [
  {
    id: 1,
    type: "Standard",
    description:
      "Comfortable, affordable stay for solo travelers or couples. Queen bed, en-suite bathroom, work desk, essential amenities.",
    size: "25 m²",
    beds: "1 Queen Bed",
    guests: "2 Guests",
    price: 100,
    status: "Occupied",
    availability: "12/20 Rooms",
    image: "https://via.placeholder.com/100", // Replace with actual image link
  },
  {
    id: 2,
    type: "Deluxe",
    description:
      "More space and luxury. King bed, separate seating, larger desk, 55-inch TV, en-suite bathroom with bath and shower.",
    size: "35 m²",
    beds: "1 King Bed",
    guests: "2 Guests",
    price: 150,
    status: "Available",
    availability: "8/10 Rooms",
    image: "https://via.placeholder.com/100", // Replace with actual image link
  },
  {
    id: 3,
    type: "Suite",
    description:
      "Spacious and private with separate living and sleeping areas. King bed, furnished living area, kitchenette – ideal for extended stays.",
    size: "50 m²",
    beds: "1 King Bed",
    guests: "2 Guests",
    price: 250,
    status: "Available",
    availability: "4/10 Rooms",
    image: "https://via.placeholder.com/100", // Replace with actual image link
  },
  {
    id: 4,
    type: "Family",
    description:
      "Designed for comfort and practicality. Two queen beds, bunk beds accommodate up to 6 guests. Full-size bathroom, seating area, work space.",
    size: "45 m²",
    beds: "2 Queen Beds",
    guests: "4 Guests",
    price: 200,
    status: "Available",
    availability: "12/15 Rooms",
    image: "https://via.placeholder.com/100", // Replace with actual image link
  },
  {
    id: 5,
    type: "Single",
    description:
      "Features a single bed, modern en-suite bathroom, work desk, and essential amenities for a practical and functional stay.",
    size: "20 m²",
    beds: "1 Single Bed",
    guests: "1 Guest",
    price: 70,
    status: "Available",
    availability: "17/20 Rooms",
    image: "https://via.placeholder.com/100", // Replace with actual image link
  },
];

export default Rooms;
