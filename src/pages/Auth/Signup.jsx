import axios from "axios";
import React, { useState } from "react";
import { AppRoutes } from "../../constant/constant";
import { useNavigate } from "react-router";

function Signup() {
  const navigate = useNavigate();
  const [URL, setURL] = useState([]);

  const handleImage = (e) => {
    const cloud = import.meta.env.VITE_CLOUDINARY_CLOUDNAME;
    const file = e.target.files[0];
    if (!file) return console.log("Pic is Empty");
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "fyp_SMIT");
    data.append("cloud_name", cloud);
    const res = fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setURL(data.url);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      image: URL,
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: "user",
    };

    axios
      .post(AppRoutes.signup, obj)
      .then((res) => {
        console.log(res);
        navigate("/site")
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <div className="h-screen flex container mx-auto">
        <div className="flex align-center justify-center w-full my-10">
          <div className="shadow-lg p-10">
            <h1 className="font-bold text-3xl">Create a new account</h1>
            <p className="text-center mb-4">Its quick and easy</p>
            <hr />
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
              <div className="my-5">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="user_avatar"
                >
                  Profile Photo
                </label>
                <input
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="user_avatar_help"
                  onChange={handleImage}
                  id="image"
                  type="file"
                />
              </div>
              <div className="my-5">
                <input
                  type="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@site.com"
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="......."
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
