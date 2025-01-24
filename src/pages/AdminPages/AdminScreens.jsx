import React from "react";
import { Outlet } from "react-router";

function AdminScreens() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col md:flex-row shadow">
      <div className="bg-cyan-800 w-full md:w-1/6">
        <div className="flex md:hidden justify-between items-center bg-cyan-800 px-4 py-2">
          <div className="font-serif text-xl text-white">ADMIN</div>
        </div>

        <div className="font-bold uppercase text-xl md:text-2xl text-center text-white py-6 hidden md:block">
          ADMIN
        </div>

        <div className="font-bold uppercase text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4 my-2 hover:border-white">
          Dashboard
        </div>

        <div className="font-bold uppercase text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4 my-2 hover:border-white">
          Students
        </div>

        <div className="font-bold uppercase text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4 my-2 hover:border-white">
          Course
        </div>

        <div className="font-bold uppercase text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4 my-2 hover:border-white">
          Announcements
        </div>
        <div className="font-bold uppercase text-md md:text-lg cursor-pointer text-white bg-cyan-900 hover:border p-4 my-2 hover:border-white">
          Instructors
        </div>
      </div>

      <div className="flex flex-col flex-end w-full md:w-5/6 bg-blue-50">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminScreens;
