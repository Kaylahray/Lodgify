import React, { useState } from "react";
import SecondLayoutCard from "../components/SecondLayoutCard";
import CaretSelect from "../components/CaretSelect";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import { Size, Guest, Bed } from "../assets/assets";
import DetailsFeatures from "../features/rooms/DetailsFeatures";

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null); // State to track the selected room

  return (
    <div className=" gap-6 grid xl:grid-cols-[2fr_1fr] bg-white">
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
        <div className="bg-red-500 ">
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
          <div className="hidden xl:block">
            <RoomList onSelectRoom={setSelectedRoom} />
          </div>
        </div>
      </SecondLayoutCard>
      <div className="p-4">
        {/* Right Section: Room Detail on larger screens */}
        <aside className=" inset-y-0 right-0 hidden w-96 overflow-y-auto h-full rounded-lg bg-customG  px-4 py-6 sm:px-6 lg:px-8 xl:block">
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
      className="w-20 h-20 object-cover rounded-lg mr-4"
    />

    <div className="flex flex-col items-start gap-4 bg-yellow-600 flex-1">
      <div className="flex justify-between bg-green-600 w-full">
        <div className="flex flex-col gap-2 bg-red-400">
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
  <div className="flex flex-col">
    {/* <button onClick={onBack} className="mb-4 text-blue-500">
      Back to Room List
    </button> */}
    <div>
      <span>Room Details</span>
      <button>Edit</button>
    </div>

    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div>
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
      <div className="grid grid-cols-[2fr_1fr]">
        {/* Room Image */}
        <div className="w-full pr-6">
          <img
            src={room.image}
            alt={room.type}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="grid">
          <img
            src={room.image}
            alt={room.type}
            className="w-full h-full object-cover rounded-lg"
          />{" "}
          <img
            src={room.image}
            alt={room.type}
            className="w-full h-full object-cover rounded-lg"
          />{" "}
          <img
            src={room.image}
            alt={room.type}
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="p-6"> View All</button>
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
      <DetailsFeatures title="feature" />
      <DetailsFeatures title="feature" />
      <DetailsFeatures title="feature" />
    </div>
  </div>
);

const rooms = [
  {
    id: 1,
    type: "Standard",
    description: "Comfortable standard rooms for travelers.",
    size: "25 m²",
    beds: "Queen Bed",
    guests: "2 Guests",
    price: 100,
    status: "Occupied",
    image: "https://via.placeholder.com/100",
    features: ["Free Wi-Fi", "Ensuite bathroom"],
    facilities: ["Air conditioning", "Work desk"],
    amenities: ["Flat-screen TV", "Coffee maker"],
  },
  {
    id: 2,
    type: "Deluxe",
    description: "Spacious room with great city views.",
    size: "35 m²",
    beds: "King Bed",
    guests: "2 Guests",
    price: 150,
    status: "Available",
    image: "https://via.placeholder.com/100",
    features: ["Private balcony", "City view"],
    facilities: ["Free parking", "Room service"],
    amenities: ["Bathtub", "Minibar"],
  },
  {
    id: 3,
    type: "Suite",
    description: "Luxurious suite with separate living area.",
    size: "40 m²",
    beds: "King Bed",
    guests: "3 Guests",
    price: 250,
    status: "Available",
    image: "https://via.placeholder.com/100",
    features: ["Separate living area", "Dining space"],
    facilities: ["Spa access", "Free breakfast"],
    amenities: ["Jacuzzi", "Personal butler service"],
  },
  // Add more room data here...
];

export default Rooms;
