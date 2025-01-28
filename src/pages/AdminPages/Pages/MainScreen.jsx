import React, { useEffect, useState } from "react";
import { AppRoutes } from "../../../constant/constant";
import axios from "axios";

function MainScreen() {
  const [requests, setRequests] = useState([]);

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
    <div className="grid grid-cols-2 gap-4 container p-10">
      {requests.map((data, index) => (
        <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg  shadow-sm">
          <span>
            <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900">
              {data.category}
            </h5>
          </span>
          <p className="font-normal text-gray-500">
            {data.name}
          </p>
          <p className="font-normal text-gray-500">
            {data.email}
          </p>
          <p className="font-normal text-gray-500">
           <b>Initial Deposit:</b>  {data.initialdeposit} PKR
          </p>
          <p className="font-normal text-gray-500">
           <b>Loan :</b>   {data.loan} PKR
          </p>
        </div>
      ))}
    </div>
  );
}

export default MainScreen;
