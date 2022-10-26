import React from "react";
import { Navigate, useOutlet } from "react-router-dom";
import Header from "../components/Header/Header";
// import Header from "../components/Header/Header";
import { useAuth } from "./useAuth";

export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/admin-panel" />;
  }

  return (
    <div>
      <Header pages={[{ label: "Products", path: "/" }]} />

      {outlet}
    </div>
  );
};
