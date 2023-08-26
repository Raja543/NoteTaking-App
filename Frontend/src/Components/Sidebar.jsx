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
    <div className="sidebar bg-white text-black w-56 p-4 h-full">
      <h2 className="text-xl font-semibold mb-4">My Sidebar</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 w-full border-2 rounded-md bg-white text-black"
        />
      </div>

      <nav>
        <ul>
          <li className="flex items-center mb-2">
            <Link to="/upcoming-task" className="flex items-center">
              <FaTasks className="mr-2" /> Upcoming Task
            </Link>
          </li>
          <li className="flex items-center mb-2">
            <Link to="/home" className="flex items-center">
              <FaTasks className="mr-2" /> Today&apos;s Task
            </Link>
          </li>
          <li className="flex items-center mb-2">
            <Link to="/calendar" className="flex items-center">
              <FaCalendarDay className="mr-2" /> Calendar
            </Link>
          </li>
          <li className="flex items-center mb-2">
            <Link to="/stickywall" className="flex items-center">
              <i className="fa-solid fa-note-sticky mr-2"></i> Sticky Wall
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-auto">
        <button className="flex items-center text-sm text-black">
          <FaCog className="mr-2" /> Settings
        </button>
        <button
          onClick={Logout}
          className="flex items-center text-sm text-black mt-1"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Sidebar;
