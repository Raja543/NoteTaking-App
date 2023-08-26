import React from "react";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <>
      <div className="flex flex-row">
        <Sidebar />
        <div>
          <h4>Welcome</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
