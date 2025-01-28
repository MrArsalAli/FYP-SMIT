import axios from "axios";
import React, { useContext } from "react";
import Cookies from "js-cookie";
import { AppRoutes } from "../../constant/constant";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { setUser, setToken } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post(AppRoutes.login, obj)
      .then((res) => {
        const token = res?.data?.data?.token;
        const currentUser = res?.data?.data?.user;
        Cookies.set("token", token, { expires: 7 });
        setToken(token);
        setUser(currentUser);
        switch (currentUser.role) {
          case "admin":
            navigate("/admin");
            break;
          default:
            navigate("/site");
            break;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="h-screen flex container mx-auto">
      <div className="flex w-full my-30">
        <div className="w-1/2 p-20 h-72">
          <h1 className="text-5xl">Site Name</h1>
          <p className="text-2xl">Lorem, ipsum dolor. Lorem, ipsum dolor.</p>
        </div>
        <div className="w-1/2 p-10">
          <form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto shadow-lg p-4"
          >
            <h1 className="font-bold text-2xl my-2">Welcome Back</h1>
            <div className="mb-5">
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@site.com"
                required=""
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                id="password"
                className="bg-gray-50 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="......."
                required=""
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            <div className="mt-4">
              <button
                onClick={() => navigate("/signup")}
                className="text-white bg-green-700 cursor-pointer hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create new account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
