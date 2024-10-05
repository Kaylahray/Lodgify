import React from "react";
import {
  Logo,
  DashIcon,
  ReservationIcon,
  RoomsIcon,
  MessagesIcon,
  HousekeepingIcon,
  InventoryIcon,
  CalendarIcon,
  FinancialsIcon,
  ReviewsIcon,
  ConciergeIcon,
} from "../assets/assets";
import { NavLink, Outlet } from "react-router-dom";

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
    icon: HousekeepingIcon,
  },
  { name: "Inventory", path: "/inventory", icon: InventoryIcon },
  { name: "Calendar", path: "/calendar", icon: CalendarIcon },
  { name: "Financials", path: "/financials", icon: FinancialsIcon },
  { name: "Reviews", path: "/reviews", icon: ReviewsIcon },
  { name: "Concierge", path: "/concierge", icon: ConciergeIcon },
];
const Layout = () => {
  //   const location = useLocation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-layout gap-4 min-h-screen w-screen">
      <div className="hidden lg:sticky lg:z-50 border-r-[1px] lg:flex lg:flex-col h-screen lg:top-0 ">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto  bg-white px-4 py-6">
          <div className="flex h-16 shrink-0 items-center">
            <Logo />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col">
              <li>
                <ul role="list" className="-mx-2 flex flex-col gap-2">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          isActive
                            ? "flex gap-2 items-center py-[10px] rounded-lg bg-[#E7F68E] px-2 font-lato text-sm font-semibold leading-[1] tracking-[0.14px] "
                            : "flex gap-2 rounded-lg items-center py-[10px] px-2 text-[#A3A3A3] font-lato text-sm font-semibold leading-[1] tracking-[0.14px]"
                        }
                      >
                        <item.icon />
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="py-10 bg-[#F8F8F8] w-full">
        <header className="z-40 flex justify-between items-center">
          hello
        </header>
        <main className="px-4 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
