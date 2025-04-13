import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const PublicRoute = ({ children }) => {
  const token = sessionStorage.getItem("token");

  if (!token) {
    return children;
  }

  let role = null;

  try {
    const decoded = jwtDecode(token);
    role = decoded?.role;
  } catch (error) {
    console.error("Invalid token:", error);
 
    sessionStorage.removeItem("token");
    return children;
  }

  if (role === "recruiter") {
    return <Navigate to="/recruiterDash" replace />;
  }

  return <Navigate to="/" replace />;
};

export default PublicRoute;
