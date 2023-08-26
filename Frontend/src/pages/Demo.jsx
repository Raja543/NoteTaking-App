import React from "react";
import { HashLink } from "react-router-hash-link";

const demo = () => {
  return (
    <div className="mx-36 my-16">
      <div className="flex flex-row  items-center custom-shadow gap-4">
        <div className="rounded-3xl  m-4">
          <img
            src="/assets/images/demo.png"
            alt="demo"
            className="rounded-2xl "
          />
        </div>
        <div className="max-w-xl m-8 p-4">
          <h1 className="text-4xl font-black font-lexend py-4">
            Productive Mind
          </h1>
          <p className="text-lg font-inter pb-2 ">
            With only the features you need , organic mind is customized for
            individuals seeking stress free way to focused on thier goals,
            projects and tasks.
          </p>
          <HashLink to="/signup" smooth>
            <button className="bg-[#ffd651] text-black text-lg font-semibold py-2 px-4 rounded-md my-4 w-full">
              Get Started
            </button>
          </HashLink>
          <HashLink to="/login" smooth>
            <p className="text-md font-lexend font-black cursor-pointer text-center">
              Already have an account ? Sign in
            </p>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default demo;
