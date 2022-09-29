import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Public from "./pages/Public";
import { HomeLayout } from "./routing/HomeLayout";
import { ProtectedLayout } from "./routing/ProtectedLayout";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Public />} />
        <Route path="/prijava" element={<Login />} />
      </Route>

      <Route path="/admin-panel" element={<ProtectedLayout />}>
        <Route path="" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default App;
