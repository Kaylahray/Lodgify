import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllData } from "../api/apiService";
const LodgifyContext = createContext();

export const LodgifyProvider = ({ children }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["lodgify"],
    queryFn: fetchAllData,
  });

  return (
    <LodgifyContext.Provider value={{ data, isLoading, error }}>
      {children}
    </LodgifyContext.Provider>
  );
};

export const useReservation = () => {
  return useContext(LodgifyContext);
};

export const useBookingHistory = () => {
  return useContext(LodgifyContext);
};
