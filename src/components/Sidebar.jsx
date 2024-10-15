import { useState } from "react";
import { NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import NavItem from "./NavItem";
import {
  DashIcon,
  ReservationIcon,
  RoomsIcon,
  MessagesIcon,
  InventoryIcon,
  CalendarIcon,
  FinancialsIcon,
  ReviewsIcon,
  ConciergeIcon,
  Logo,
} from "../assets/assets";

const navigation = [
  { name: "Dashboard", path: "/", icon: DashIcon },
  {
    name: "Reservation",
    path: "/reservation",
    icon: ReservationIcon,
  },
  { name: "Rooms", path: "/rooms", icon: RoomsIcon },
  { name: "Messages", path: "/messages", icon: MessagesIcon },
  { name: "Housekeeping", path: "/housekeeping", icon: MessagesIcon },
  { name: "Inventory", path: "/inventory", icon: InventoryIcon },
  { name: "Calendar", path: "/calendar", icon: CalendarIcon },
  {
    name: "Financials",
    path: "/financials",
    icon: FinancialsIcon,
    isButton: true,
    subNav: [
      { name: "Invoice", path: "/financials/invoice" },
      { name: "Expenses", path: "/financials/expense" },
    ],
  },
  { name: "Reviews", path: "/reviews", icon: ReviewsIcon },
  { name: "Concierge", path: "/concierge", icon: ConciergeIcon },
];

const Sidebar = ({
  sidebarOpen,
  toggleSidebar,
  subnav,
  showSubnav,
}) => {
  return (
    <div
      className={`fixed inset-y-0 z-50 flex lg:w-[192px] flex-col transition-transform duration-300 lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-4 py-6">
        <button
          type="button"
          onClick={toggleSidebar}
          className="-m-2.5 p-2.5 lg:hidden"
        >
          <span className="sr-only">Close sidebar</span>
          <XMarkIcon
            aria-hidden="true"
            className="h-6 w-6 text-white"
          />
        </button>
        <div className="flex h-16 shrink-0 items-center">
          <Logo />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul className="flex flex-1 flex-col">
            <ul role="list" className="-mx-2 flex flex-col gap-2">
              {navigation.map((item) => (
                <NavItem
                  key={item.name}
                  item={item}
                  subnav={subnav}
                  showSubnav={showSubnav}
                />
              ))}
            </ul>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
