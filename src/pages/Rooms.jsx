import React, { useState } from "react";
import SecondLayoutCard from "../components/SecondLayoutCard";
import CaretSelect from "../components/CaretSelect";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";


import RoomList from "../features/rooms/RoomList";
import RoomDetail from "../features/rooms/RoomDetail";
RoomDetail;
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

export default Rooms;
