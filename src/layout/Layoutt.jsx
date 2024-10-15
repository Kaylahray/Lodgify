import { useState } from "react";
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

      <div className="lg:pl-60 bg-customG">
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

          {/* Separator */}

          <header className=" flex-1 flex justify-between items-center">
            hello
          </header>
        </div>
        {/* main */}
        <main className="py-4">
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