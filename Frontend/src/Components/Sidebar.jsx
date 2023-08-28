import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { FaCog, FaSignOutAlt, FaCalendarDay, FaTasks } from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
        return;
      }
      try {
        await axios.post(
          "http://localhost:4000", // Replace with your API endpoint
          {},
          { withCredentials: true }
        );
      } catch (error) {
        console.error("Error verifying cookie:", error);
        removeCookie("token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };

  return (
    <div className="sidebar bg-[#f4f4f4eb] text-black w-80 mx-4 p-4 h-[95vh]">
      <div className="flex flex-row justify-between items-center my-2">
        <h2 className="text-3xl font-bold font-lexend px-2">Menu</h2>
        <i className="fa-solid fa-bars text-2xl text-[#807e7e]"></i>
      </div>
      <div className="my-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 w-full border-2 rounded-lg bg-white text-black"
        />
      </div>

      <nav>
        <ul className="text-sm font-extrabold font-lexend p-2">
          TASKS
          <Link to="/upcoming-task" className="flex items-center text-base ">
            <li className="flex items-center px-3 py-1 rounded-lg font-light hover:bg-[#e2e2e2] w-full">
              <FaTasks className="mr-5  text-[#807e7e]" /> Upcoming
            </li>
          </Link>
          <Link to="/home" className="flex items-center text-base ">
            <li className="flex items-center px-3 py-1 rounded-lg font-light hover:bg-[#e2e2e2] w-full">
              <FaTasks className="mr-5 text-lg text-[#807e7e]" /> Today
            </li>
          </Link>
          <Link to="/calendar" className="flex items-center text-base ">
            <li className="flex items-center px-3 py-1  rounded-lg font-light hover:bg-[#e2e2e2] w-full">
              <FaCalendarDay className="mr-5 text-lg text-[#807e7e]" /> Calendar
            </li>
          </Link>
          <Link to="/stickywall" className="flex items-center text-base ">
            <li className="flex items-center px-3 py-1  rounded-lg font-light hover:bg-[#e2e2e2] w-full">
              <i className="fa-solid fa-note-sticky mr-5 text-lg text-[#807e7e] "></i>
              Sticky Wall
            </li>
          </Link>
        </ul>
      </nav>

      <hr className="bg-[#afafaf]" />
      <nav>
        <ul className="text-sm font-extrabold font-lexend p-2">
          LISTS
          <li className="flex items-center px-3 py-1 ">
            <i className="fa-solid fa-square mr-5 text-[#ee4747]"></i>
            <Link to="/" className="flex items-center text-base font-light">
              Personal
            </Link>
          </li>
          <li className="flex items-center px-3 py-1 ">
            <i className="fa-solid fa-square mr-5  text-[#69dffc]"></i>
            <Link to="/" className="flex items-center text-base font-light">
              Work
            </Link>
          </li>
          <li className="flex items-center px-3 py-1 ">
            <i className="fa-solid fa-square mr-5 text-lg text-[#ebdc41]"></i>
            <Link to="/" className="flex items-center text-base font-light">
              List 1
            </Link>
          </li>
          <li className="flex items-center px-4 py-1">
            <Link to="/" className="flex items-center text-base font-light">
              + <span className="ml-4">Add List</span>
            </Link>
          </li>
        </ul>
      </nav>
      <hr className="bg-[#afafaf]" />
      <nav>
        <div className="text-sm font-extrabold font-lexend p-2 my-2 text-center">
          TAGS
          <div className="grid grid-cols-3 gap-4 items-center my-2">
            <div className=" px-2 py-2 rounded-lg bg-[#fd99aa]">Tag 1</div>
            <div className="px-3 py-2 rounded-lg bg-[#fd99aa]">Tag 2</div>
            <div className="px-3 py-2 rounded-lg bg-[#fd99aa]">Tag 3</div>
          </div>
          <div className="text-left px-3 py-2 ">+ Add Tag</div>
        </div>
      </nav>

      <div className="mt-4 ">
        <button className="flex items-center justify-center text-black p-2">
          <FaCog className="mr-2 text-lg  text-[#807e7e]" /> Settings
        </button>
        <button onClick={Logout} className="flex items-center justify-center text-black p-2 ">
          <FaSignOutAlt className="mr-2 text-lg  text-[#807e7e]" /> Logout
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Sidebar;
