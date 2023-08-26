import React from "react";
import Sidebar from "../Components/Sidebar";

const StickyWall = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div>
        <h4>Sticky wall page</h4>
      </div>
    </div>
  );
};

export default StickyWall;
