import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);

  // switch (user.role) {
  //   case "admin":
  //     navigate("/admin");
  //     break;
  //   default:
  //     navigate("/site");
  //     break;
  // }
  return (
    <>
      <div className="min-h-screen container mx-auto">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="grid grid-cols-2 container px-5 mx-auto">
            <div
              onClick={() => navigate("/weddingLoans")}
              className="shadow-lg cursor-pointer p-12 flex flex-col items-start"
            >
              <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Wedding Loans
              </h2>
              <p className="leading-relaxed mb-8">
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund.
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
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund.
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
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund.
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
                Live-edge letterpress cliche, salvia fanny pack humblebrag
                narwhal portland. VHS man braid palo santo hoodie brunch trust
                fund.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
