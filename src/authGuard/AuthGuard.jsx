import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import { checkAuth } from "../services/apiAuth"; // Your authentication check service

const AuthGuard = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Track auth status
  const navigate = useNavigate();

  useEffect(() => {
    const subscription = checkAuth((session) => {
      if (session) {
        setIsAuthenticated(true); // User is authenticated
      } else {
        setIsAuthenticated(false); // Redirect to login
        navigate("/login"); // Optional: Save the route they tried to access
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (isAuthenticated === null) {
  // Do not render anything during the loading state
  return null;
}

  return <>{children}</>; // Render children if authenticated
};

export default AuthGuard;

