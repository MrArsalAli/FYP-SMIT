import React from "react";
import { Routes } from "react-router";
import App from "./App";
import { Route } from "react-router";
import Auth from "./pages/Auth/Auth";
import AdminScreens from "./pages/AdminPages/AdminScreens";
import MainScreen from "./pages/AdminPages/Pages/MainScreen";
import MainPage from "./pages/MainPage";
import MainLayout from "./components/MainLayout";

function AppRouter() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<App />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/site" element={<MainPage />} />
        </Route>
        <Route element={<AdminScreens />}>
          <Route index path="/admin" element={<MainScreen />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRouter;
