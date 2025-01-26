import React from "react";
import { Outlet } from "react-router";

function AdminScreens() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col md:flex-row shadow">
      <div className="bg-gray-500 w-full md:w-1/5">
        <div className="flex md:hidden justify-between items-center px-4 py-2">
          <div className="font-serif text-xl text-white">ADMIN</div>
        </div>

        <div className="font-bold uppercase text-xl md:text-2xl text-center text-white py-6 hidden md:block">
          ADMIN
        </div>

        <div className="font-bold uppercase text-md md:text-lg hover:bg-black hover:text-white cursor-pointer bg-gray-600 p-4 my-1">
          Dashboard
        </div>
        <div className="font-bold uppercase text-md md:text-lg hover:bg-black hover:text-white cursor-pointer bg-gray-600 p-4 my-1">
          Users
        </div>
      </div>

      <div className="flex flex-col flex-end w-full md:w-4/5 bg-gray-50">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminScreens;
