import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const LoginGate = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();
  console.log(location);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default LoginGate;
