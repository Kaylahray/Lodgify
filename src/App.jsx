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
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { LodgifyProvider } from "./hooks/usePage";
import Expense from "./pages/Expense";
import GuestProfile from "./features/reservation/GuestProfile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "rooms", element: <Rooms /> },
      { path: "reviews", element: <Reviews /> },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "/reservation/guest-profile/:id",
        element: <GuestProfile />,
      },
      // {
      //   path: "/guest-profile/:id",
      //   element: <GuestProfile />,
      // },
      { path: "messages", element: <Messages /> },
      { path: "housekeeping", element: <HouseKeeping /> },
      { path: "inventory", element: <Inventory /> },
      { path: "calendar", element: <Calender /> },
      {
        path: "financials",
        element: <Financials />,
        children: [
          { path: "invoice", element: <Calender /> },
          { path: "expense", element: <Expense /> },
        ],
      },
      { path: "reviews", element: <Reviews /> },
      { path: "concierge", element: <Concierge /> },
    ],
  },
]);
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <LodgifyProvider>
        <RouterProvider router={router} />
      </LodgifyProvider>
    </QueryClientProvider>
  );
};

export default App;
