import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginGate = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default LoginGate;
