import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { AppRoutes } from "../constant/constant";

function MainPage() {
  const { user } = useContext(AuthContext);
  const [userRequests, setUserRequests] = useState([]);

  useEffect(() => {
    const fetchUserRequest = async (email) => {
      try {
        const response = await axios.get(AppRoutes.getUserRequests, {
          params: { email },
        });
        setUserRequests(response?.data?.data);
      } catch (error) {
        console.error("Error fetching requests:", error.message);
      }
    };
    fetchUserRequest(user?.email);
  }, [user?.email]);

  return (
    <div className="min-h-screen grid grid-cols-2 container mx-auto">
        {userRequests.map((data, index) => (
          <div key={index} className="container p-12">
            <div className="-my-8 p-4 divide-y-2 shadow-lg divide-gray-100">
                <h1 className="text-3xl">My Requests For Loan</h1>
              <div className="my-2 py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:flex-grow">
                  <h2 className="text-2xl text-center uppercase font-medium text-gray-900 title-font mb-2">
                   For: {data.category}
                  </h2>
                  <div className="flex justify-between">
                    <p className="leading-relaxed font-bold text-2xl">{data.name}</p>
                    <p className="leading-relaxed">
                      <b>Loan:</b> {data.loan}
                    </p>
                    <p className="leading-relaxed">
                      <b>Initial Deposit:</b> {data.initialdeposit}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default MainPage;
