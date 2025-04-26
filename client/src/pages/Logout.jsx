import React from "react";
import { AuthoContext } from "../stores/auth";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
const Logout = () => {
  const { LogoutUser } = useContext(AuthoContext);
  useEffect(() => {
    LogoutUser();
  }, []);
  return (
    <div>
      <Navigate to="/login" />
    </div>
  );
};

export default Logout;
