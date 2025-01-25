import axios from "axios";
import React from "react";
import { AppRoutes } from "../../constant/constant";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate


  const handleSubmit = (e) => {
    const obj = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    axios
      .post(AppRoutes.login, obj)
      .then((res) => {
        navigate("/site")
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
          <form className="max-w-sm mx-auto">
            <h1 className="font-bold text-2xl my-2">Welcome Back</h1>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@site.com"
                required=""
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
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
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
