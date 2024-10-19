import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { checkAuth } from "../services/apiAuth"; // Your authentication check service

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const subscription = checkAuth((session) => {
      if (!session) {
        navigate("/login"); // Redirect to login if not authenticated
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  return <>{children}</>; // Render the children (protected routes)
};

export default AuthGuard;
