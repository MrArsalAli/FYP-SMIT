import React, { useEffect, useState } from "react";
import { AppRoutes } from "../../../constant/constant";
import axios from "axios";

function MainScreen() {
  const [requests, setRequests] = useState([]);

  // Fetch Students
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(AppRoutes.getAllRequests);
        setRequests(response.data.data);
      } catch (error) {
        console.error("Error fetching requests:", error.message);
      }
    };
    fetchRequests();
  }, []);

  console.log(requests);

  return (
    <div className="h-screen grid grid-cols-2 gap-4 container mx-auto p-10">
      {requests.map((data, index) => (
        <div key={index} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg  shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <span>
            <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
              {data.category}
            </h5>
          </span>
          <p className="font-normal text-gray-500 dark:text-gray-400">
            {data.name}
          </p>
          <p className="font-normal text-gray-500 dark:text-gray-400">
            {data.email}
          </p>
          <p className="my-2 font-normal text-gray-500 dark:text-gray-400">
            Loan : {data.loan}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MainScreen;
