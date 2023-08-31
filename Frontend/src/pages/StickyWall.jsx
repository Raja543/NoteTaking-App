import React from "react";
import Sidebar from "../Components/Sidebar";
import StickyWallCo from "../Components/StickyWall";


const StickyWall = () => {
  return (
    <div className="flex flex-row p-4">
      <Sidebar />
      <div className="w-90">
        <h4>Sticky wall page</h4>
        <StickyWallCo />
      </div>
    </div>
  );
};

export default StickyWall;
