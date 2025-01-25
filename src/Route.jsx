import React, { useContext } from "react";
import { Routes, useNavigate } from "react-router";
import App from "./App";
import { Route } from "react-router";
import AdminScreens from "./pages/AdminPages/AdminScreens";
import MainScreen from "./pages/AdminPages/Pages/MainScreen";
import MainPage from "./pages/MainPage";
import MainLayout from "./components/MainLayout";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import { AuthContext } from "./context/AuthContext";
import WeddingLoans from "./pages/WeddingLoans";
import HomeConstructionLoans from "./pages/HomeConstructionLoans";
import BusinessStartupLoans from "./pages/BusinessStartupLoans";
import EducationLoans from "./pages/EducationLoans";

function AppRouter() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<App />} />
          <Route path="/site" element={<MainPage />} />
          <Route path="/weddingLoans" element={<WeddingLoans />} />
          <Route
            path="/homeConstructionLoans"
            element={<HomeConstructionLoans />}
          />
          <Route
            path="/businessStartupLoans"
            element={<BusinessStartupLoans />}
          />
          <Route path="/educationLoans" element={<EducationLoans />} />
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
