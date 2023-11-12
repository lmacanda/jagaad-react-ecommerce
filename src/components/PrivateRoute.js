import React, { useEffect } from "react";
import { Route, Redirect, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const [isAuthenticated] = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  return isAuthenticated ? children : "";
};
export default PrivateRoute;
