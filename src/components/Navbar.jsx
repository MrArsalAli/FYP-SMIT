import React, { useContext, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { setUser, setToken, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    Cookies.remove("token");
    console.log("User logged out successfully");
    window.location = "/";
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl container flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Microfinance App
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {user ? (
              <button
                type="button"
                onClick={handleLogout}
                className="text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Logout
              </button>
            ) : (
              <UserOutlined
                onClick={() => navigate("/login")}
                className="text-xl"
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
