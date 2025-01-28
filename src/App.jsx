import React, { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);

  useEffect(() => {
    if (user && user.role) {
      switch (user.role) {
        case "admin":
          navigate("/admin");
          break;
        case "user":
          navigate("/site");
          break;
        default:
          break;
      }
    }
    return;
  }, [user, navigate]);

  return (
    <>
      <div className="min-h-screen container mx-auto">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="grid grid-cols-2 container my-6 px-5 mx-auto">
            <div
              onClick={() => navigate("/weddingLoans")}
              className="shadow-lg cursor-pointer p-12 flex flex-col items-start"
            >
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Wedding Loans
              </h2>
              <p className="leading-relaxed mb-8">
                Make your dream wedding a reality with our easy and affordable
                wedding loans. Flexible plans tailored for your special day!
              </p>
            </div>
            <div
              onClick={() => navigate("/homeConstructionLoans")}
              className="shadow-lg cursor-pointer p-12 flex flex-col items-start"
            >
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Home Construction Loans
              </h2>
              <p className="leading-relaxed mb-8">
                Build your dream home with our customized construction loans.
                Easy approval and flexible repayment options await!
              </p>
            </div>
            <div
              onClick={() => navigate("/businessStartupLoans")}
              className="shadow-lg cursor-pointer p-12 flex flex-col items-start"
            >
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Business Startup Loans
              </h2>
              <p className="leading-relaxed mb-8">
                Kickstart your entrepreneurial journey with our flexible startup
                loans. Designed to fuel your business dreams!
              </p>
            </div>
            <div
              onClick={() => navigate("/educationLoans")}
              className="shadow-lg cursor-pointer p-12 flex flex-col items-start"
            >
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Education Loans
              </h2>
              <p className="leading-relaxed mb-8">
                Invest in your future with our education loans. Affordable plans
                to help you achieve academic excellence!
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
