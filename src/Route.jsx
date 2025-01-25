import React from "react";
import { Routes } from "react-router";
import App from "./App";
import { Route } from "react-router";
import AdminScreens from "./pages/AdminPages/AdminScreens";
import MainScreen from "./pages/AdminPages/Pages/MainScreen";
import MainPage from "./pages/MainPage";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<App />} />
          <Route path="/site" element={<MainPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<AdminScreens />}>
          <Route index path="/admin" element={<MainScreen />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;
