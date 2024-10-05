import React from "react";
import Layout from "./layout/Layout";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Reservation from "./pages/Reservation";
import Reviews from "./pages/Reviews";
import Messages from "./pages/Messages";
import HouseKeeping from "./pages/HouseKeeping";
import Inventory from "./pages/Inventory";
import Calender from "./pages/Calender";
import Financials from "./pages/Financials";
import Concierge from "./pages/Concierge";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "rooms", element: <Rooms /> },
      { path: "reviews", element: <Reviews /> },
      { path: "reservation", element: <Reservation /> },
      { path: "messages", element: <Messages /> },
      { path: "housekeeping", element: <HouseKeeping /> },
      { path: "inventory", element: <Inventory /> },
      { path: "calendar", element: <Calender /> },
      { path: "financials", element: <Financials /> },
      { path: "reviews", element: <Reviews /> },
      { path: "concierge", element: <Concierge /> },
    ],
  },
]);
const App = () => {
  return (
    <div className="w-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
