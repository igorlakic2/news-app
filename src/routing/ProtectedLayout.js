import React from "react";
import { Navigate, useOutlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useAuth } from "./useAuth";
// import AdminHeader from "../components/Header/AdminHeader";
// ...

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Header pages={[]} />
      {outlet}
    </div>
  );
};
