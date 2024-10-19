import { useEffect, useState } from "react";
import {
  Logo,
  DashIcon,
  ReservationIcon,
  RoomsIcon,
  MessagesIcon,
  InventoryIcon,
  CalendarIcon,
  FinancialsIcon,
  ReviewsIcon,
  ConciergeIcon,
  Profile,
  GearSix,
  Notify,
} from "../assets/assets";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/20/solid";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import { messages } from "../features/Chat/messages";

const navigation = [
  { name: "Dashboard", path: "/", icon: DashIcon },
  {
    name: "Reservation",
    path: "/reservation",
    icon: ReservationIcon,
  },

  { name: "Rooms", path: "/rooms", icon: RoomsIcon },
  { name: "Messages", path: "/messages", icon: MessagesIcon },
  {
    name: "Housekeeping",
    path: "/housekeeping",
    icon: MessagesIcon,
  },
  { name: "Inventory", path: "/inventory", icon: InventoryIcon },
  { name: "Calendar", path: "/calendar", icon: CalendarIcon },
  {
    name: "Financials",
    path: "/financials",
    icon: FinancialsIcon,
    iconClosed: ChevronDownIcon,
    iconOpen: ChevronUpIcon,
    isButton: true,
    subNav: [
      { name: "Invoice", path: "/financials/invoice" },
      { name: "Expenses", path: "/financials/expense" },
    ],
  },
  { name: "Reviews", path: "/reviews", icon: ReviewsIcon },
  { name: "Concierge", path: "/concierge", icon: ConciergeIcon },
];
const Layout = () => {
  const [subnav, setSubNav] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const getDynamicTitle = (path) => {
    const pathSegments = path.split("/").filter(Boolean); // Split path into segments
    if (pathSegments.length === 0) return "Dashboard"; // Default to dashboard title

    const titleMapping = {
      reservation: "Reservation",
      guest: "Guest Profile",
      concierge: "Concierge",
      rooms: "Rooms",
      housekeeping: "Housekeeping",
      inventory: "Inventory",
      financials: "Financials",
      reviews: "Reviews",
      invoice: "Invoice",
      expense: "Expenses",
      calendar: "Calendar",
      messages: "Messages",
    };

    // Map path segments to dynamic title (i.e., for breadcrumb)
    return pathSegments
      .map((segment) => titleMapping[segment] || "Default")
      .join(" / ");
  };

  const dynamicTitle = getDynamicTitle(currentPath);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const showSubnav = () => setSubNav(!subnav);
  return (
    <div>
      {/* sidebar */}
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
              <li>
                <ul role="list" className="-mx-2 flex flex-col gap-2">
                  {navigation.map((item) => {
                    return (
                      <li
                        key={item.name}
                        className="flex justify-between flex-col"
                      >
                        {item.isButton ? (
                          <button
                            onClick={item.subNav && showSubnav}
                            className="flex gap-2 rounded-lg items-center py-[10px] px-2 text-[#A3A3A3]  text-sm font-semibold leading-[1] tracking-[0.14px] "
                          >
                            <item.icon />
                            {item.name}
                            <div></div>
                            {item.subNav && subnav ? (
                              <item.iconOpen width={10} height={10} />
                            ) : item.subNav ? (
                              <item.iconClosed
                                width={10}
                                height={10}
                              />
                            ) : null}
                          </button>
                        ) : (
                          <NavLink
                            to={item.path}
                            onClick={item.subNav && showSubnav}
                            className={({ isActive }) =>
                              isActive
                                ? "flex gap-2 items-center py-[10px] rounded-lg bg-[#E7F68E] px-2  text-sm font-semibold leading-[1] tracking-[0.14px] "
                                : "flex gap-2 rounded-lg items-center py-[10px] px-2 text-[#A3A3A3]  text-sm font-semibold leading-[1] tracking-[0.14px]"
                            }
                          >
                            <item.icon />
                            {item.name}
                            {/* {item.subNav && subnav ? (
                          <item.iconOpen />
                        ) : item.subNav ? (
                          <item.iconClosed />
                        ) : null} */}
                          </NavLink>
                        )}
                        {subnav &&
                          item.subNav?.map((subItem, index) => (
                            <NavLink
                              key={index}
                              to={subItem.path}
                              className={({ isActive }) =>
                                isActive
                                  ? " py-[10px] rounded-lg bg-[#E7F68E] px-2 text-center text-sm font-semibold leading-[1] tracking-[0.14px] "
                                  : "rounded-lg text-center py-[10px] px-2 text-[#A3A3A3]  text-sm font-semibold leading-[1] tracking-[0.14px]"
                              }
                            >
                              {subItem.name}
                            </NavLink>
                          ))}
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="xl:pl-56 lg:pl-52 min-h-screen bg-customG flex flex-col justify-between">
        {/* header */}
        <div className="sticky top-0 z-40 flex  bg-customG h-16 shrink-0 items-center gap-x-4  px-4  sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={toggleSidebar}
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>

          {/* header */}
          <header className=" flex-1 flex py-2 justify-between items-center">
            <p className="lg:text-[24px] text-lg font-bold leading-[110%] tracking-[0.48px] text-[#0D0E0D]">
              {currentPath.includes("guest") ? (
                <div className="flex flex-col">
                  <p>
                    back <span>Guest Profile</span>
                  </p>
                  <p>reservation/guest-profile</p>
                </div>
              ) : (
                dynamicTitle
              )}
            </p>
            <div className="flex-1 gap-4 flex justify-end">
              {currentPath === "/" && (
                <div className="flex-1 hidden gap-4 lg:flex justify-end">
                  <SearchBar
                    bg="white"
                    placeholder="Search rooms, guests, books, e.t.c"
                  />
                </div>
              )}
              <div className="flex justify-between">
                <div className="flex gap-3 items-center">
                  <Profile />
                  <div className="lg:flex pb-1 flex-col hidden">
                    <p className="text-[14px] font-bold text-nowrap leading-[140%] text-[#0D0E0D]">
                      Jaylon Dorwart
                    </p>
                    <p className="text-[11px] font-normal leading-[140%] text-[#6E6E6E] ">
                      Admin
                    </p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <div className="bg-white p-2 rounded-md">
                      <GearSix />
                    </div>
                    <div className="bg-white p-2 rounded-md">
                      <Notify />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        {/* main */}
        <main className="py-4 ">
          <div className="px-4 sm:px-6 ">
            <Outlet />
          </div>
        </main>
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
