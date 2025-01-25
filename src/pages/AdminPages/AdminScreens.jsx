import React from "react";
import { Outlet } from "react-router";

function AdminScreens() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col md:flex-row shadow">
      <div className="bg-black w-full md:w-1/6">
        <div className="flex md:hidden justify-between items-center px-4 py-2">
          <div className="font-serif text-xl text-white">ADMIN</div>
        </div>

        <div className="font-bold uppercase text-xl md:text-2xl text-center text-white py-6 hidden md:block">
          ADMIN
        </div>

        <div className="font-bold uppercase text-md md:text-lg hover:bg-black hover:text-white cursor-pointer text-black bg-white p-4 border-t">
          Dashboard
        </div>
        <div className="font-bold uppercase text-md md:text-lg hover:bg-black hover:text-white cursor-pointer text-black bg-white p-4 border-t">
          Dashboard
        </div>
      </div>

      <div className="flex flex-col flex-end w-full md:w-5/6 bg-blue-50">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminScreens;
