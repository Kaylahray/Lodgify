import {
  Bed,
  EnvelopeOpen,
  Guest,
  Medal,
  Phone,
  Size,
  Stroke,
} from "../../assets/assets";
import { NavLink, useParams } from "react-router-dom";
import { RxCaretDown, RxCaretSort, RxCaretUp } from "react-icons/rx";
import { guestBookingsColumns } from "./GuestBookingList";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import CaretSelect from "../../components/CaretSelect";
import InfoItem from "./InfoItem";
import LayoutCard from "../../components/LayoutCard";
import MoreOptionCard from "../../components/MoreOptionCard";
import SearchBar from "../../components/SearchBar";
import TableBody from "../../components/TableBody";
import TableHeader from "../../components/TableHeader";
import { useReservation } from "../../hooks/usePage";
import { useState } from "react";

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
    <div className="flex flex-col gap-5">
      <div className="grid lg:grid-cols-[1fr_3fr] gap-6">
        <MoreOptionCard title="Profile">
          <ProfileSection />
        </MoreOptionCard>
        {/* Center Section: Booking Inf */}

        <BookingInfo />
      </div>
      <Table />
    </div>
  );
};

const ProfileSection = () => (
  <div>
    <div className="flex items-center gap-4 my-5">
      <img
        src="https://via.placeholder.com/100"
        alt="Profile"
        className="w-20 h-20 rounded-full"
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
      <div className="flex items-center gap-2">
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
    <div className="grid lg:grid-cols-[2fr_1fr] gap-4 bg-white rounded-md">
      <MoreOptionCard title="Booking Info">
        <div className="p-4 rounded-lg ">
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
          <h4 className="mb-4 font-semibold text-md">
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

const Table = () => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const bookings = [
    {
      image: "https://via.placeholder.com/100", // Replace with the actual image URL
      bookingId: "LG-B00109",
      bookingDate: new Date("June 09, 2028, 9:08 AM").toISOString(),
      roomType: "Deluxe",
      roomNumber: "Room 101",
      checkIn: new Date("June 19, 2024, 1:45 PM").toISOString(),
      checkOut: new Date("June 21, 2024, 11:45 AM").toISOString(),
      guests: "2 Guests",
    },
    {
      image: "https://via.placeholder.com/100", // Replace with the actual image URL
      bookingId: "LG-B00085",
      bookingDate: new Date("March 20, 2028, 9:08 AM").toISOString(),
      roomType: "Suite",
      roomNumber: "Room 305",
      checkIn: new Date("March 25, 2028, 1:45 PM").toISOString(),
      checkOut: new Date("March 30, 2028, 11:45 AM").toISOString(),
      guests: "1 Guest",
    },
  ];

  const table = useReactTable({
    data: bookings,
    columns: guestBookingsColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="col-span-2 bg-white rounded-3xl">
      <LayoutCard
        title="Booking List"
        component={
          <>
            <SearchBar
              placeholder="Search guest, status, etc"
              value={filtering}
              onChange={(e) => setFiltering(e.target.value)}
            />
            <CaretSelect btnText="All Status" />
          </>
        }
      >
        <div className=" flex flex-col justify-between">
          <table className="w-full">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="overflow-hidden rounded-2xl"
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className="p-4 cursor-pointer text-[#6E6E6E] text-nowrap text-[11px] font-normal leading-[1.4]"
                    >
                      <div className="flex items-center gap-2">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        <span>
                          {header.column.getIsSorted() === "asc" ? (
                            <RxCaretUp />
                          ) : header.column.getIsSorted() ===
                            "desc" ? (
                            <RxCaretDown />
                          ) : (
                            <RxCaretSort />
                          )}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-b-[#E7E7E7]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="text-customBlack text-nowrap p-5 text-[12px] font-normal leading-[1.4]"
                    >
                      <NavLink
                        to={`/reservation/guest-profile/${row.original.id}`} // assuming guestId exists in your data
                        className="flex w-full"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </NavLink>
                    </td>
                  ))}
                </tr>
              ))}
            </TableBody>
          </table>
        </div>
      </LayoutCard>
    </div>
  );
};

// <div>
//   <div className="flex items-center justify-between mb-4">
//     <h2 className="text-2xl font-bold">Booking ID: LG-B00109</h2>
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
//   <div className="flex justify-between mt-4">
//     <button className="px-4 py-2 text-white bg-yellow-500 rounded">
//       Edit
//     </button>
//     <button className="px-4 py-2 text-white bg-red-500 rounded">
//       Cancel Booking
//     </button>
//   </div>
// </div>

export default GuestProfile;
