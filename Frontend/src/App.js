import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Calendar from "./pages/Calendar";
import UpcomingTask from "./pages/UpcomingTask";
import StickyWall from "./pages/StickyWall";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/upcoming-task" element={<UpcomingTask />} />
        <Route path="/stickywall" element={<StickyWall />} />
      </Routes>
    </div>
  );
}

export default App;
