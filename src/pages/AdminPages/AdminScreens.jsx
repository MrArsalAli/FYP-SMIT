import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Cookies from "js-cookie";

function AdminScreens() {
  const navigate = useNavigate();
  const { setUser, setToken } = useContext(AuthContext);
  const handleLogout = () => {
    setUser(null);
    setToken(null);
    Cookies.remove("token");
    window.location = "/";
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col md:flex-row shadow">
      <div className="bg-gray-500 w-full md:w-1/5">
        <div className="flex md:hidden justify-between items-center px-4 py-2">
          <div className="font-serif text-xl text-white">ADMIN</div>
        </div>

        <div className="font-bold uppercase text-xl md:text-2xl text-center text-white py-6 hidden md:block">
          ADMIN
        </div>

        <div
          onClick={() => navigate("/admin")}
          className="font-bold uppercase text-md md:text-lg hover:bg-black hover:text-white cursor-pointer bg-gray-600 p-4 my-1"
        >
          Dashboard
        </div>
        <div
          onClick={() => navigate("/users")}
          className="font-bold uppercase text-md md:text-lg hover:bg-black hover:text-white cursor-pointer bg-gray-600 p-4 my-1"
        >
          Users
        </div>
        <div className="m-2">
          <button
            type="button"
            onClick={handleLogout}
            className="text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex flex-col flex-end w-full md:w-4/5 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminScreens;
