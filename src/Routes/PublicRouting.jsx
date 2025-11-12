import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = localStorage.getItem("token");

  // If token is present, redirect to /home
  if (token) {
    return <Navigate to="/home" replace />;
  }

  // Otherwise, allow access to /login (or any other public routes)
  return <Outlet />;
};

export default PublicRoute;
