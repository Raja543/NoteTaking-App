import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="mx-36 my-16">
      <div className="flex flex-row  items-center custom-shadow ">
        <div className="rounded-3xl  m-4">
          <img
            src="/assets/images/demo.png"
            alt="demo"
            className="rounded-2xl "
          />
        </div>
        <div className="max-w-xl m-8 p-4">
          <h1 className="text-4xl font-black font-lexend py-4">Sign Up</h1>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            className="border-2 border-gray-300 rounded-lg p-4 my-2 w-full focus:outline-none bg-white"
            onChange={handleOnChange}
          />
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            className="border-2 border-gray-300 rounded-lg p-4 my-2 w-full focus:outline-none bg-white"
            onChange={handleOnChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            className="border-2 border-gray-300 rounded-lg p-4 my-2 w-full focus:outline-none bg-white"
            onChange={handleOnChange}
          />
          <button
            className="bg-[#ffd651] text-black text-xl font-semibold p-4 rounded-lg my-4 w-full"
            onClick={handleSubmit}
          >
            Sign Up
          </button>

          <div className="text-center flex flex-col items-center">
            <hr className="my-4 border-gray-400 w-full" />
            <span
              className="bg-white px-4
              text-lg relative -mt-8 z-10"
            >
              or
            </span>
          </div>

          <div className="flex flex-row items-center justify-center gap-4">
            <button className="bg-[#eae7df] text-black text-xl font-semibold p-4 rounded-lg my-4 w-full">
              Google
            </button>
            <button className="bg-[#eae7df] text-black text-xl font-semibold p-4 rounded-lg my-4 w-full">
              Facebook
            </button>
          </div>
          <HashLink to="/login" smooth>
            <p className="text-md font-lexend font-black cursor-pointer text-center hover:underline hover:underline-offset-3">
              Already have an account? Sign in
            </p>
          </HashLink>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Signup;
