import { useNavigate } from "react-router-dom";

import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaSignOutAlt,
} from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";

// Navbar reads dark mode from ThemeContext directly
// — pages no longer need to pass darkMode / setDarkMode as props
function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav
      className={`sticky top-0 z-50 h-20 px-8 flex items-center justify-between border-b transition-colors ${
        darkMode
          ? "bg-slate-900 border-slate-700"
          : "bg-white border-slate-200"
      }`}
    >
      {/* Left */}
      <div>
        <h1 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-slate-800"}`}>
          Saffron Spice Admin
        </h1>
        <p className={`text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
          Restaurant Management Dashboard
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className={`hidden md:flex items-center rounded-xl px-4 py-2 w-64 ${darkMode ? "bg-slate-800" : "bg-slate-100"}`}>
          <FaSearch className={`mr-3 ${darkMode ? "text-slate-400" : "text-slate-400"}`} />
          <input
            type="text"
            placeholder="Search..."
            className={`bg-transparent w-full outline-none text-sm ${darkMode ? "text-slate-200 placeholder-slate-500" : "text-slate-700"}`}
          />
        </div>

        {/* Notification bell */}
        <button className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition ${darkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-slate-100 hover:bg-slate-200"}`}>
          <FaBell className={darkMode ? "text-slate-300" : "text-slate-600"} />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500" />
        </button>

        {/* Dark / light toggle */}
        <button
          onClick={toggleDarkMode}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${darkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-slate-100 hover:bg-slate-200"}`}
        >
          {darkMode
            ? <FaSun className="text-yellow-400" />
            : <FaMoon className="text-slate-600" />}
        </button>

        {/* Profile + logout */}
        <div className="flex items-center gap-3">
          <FaUserCircle size={38} className="text-orange-500" />
          <div className="hidden md:block">
            <p className={`font-semibold text-sm ${darkMode ? "text-white" : "text-slate-800"}`}>
              Admin
            </p>
            <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
              Restaurant Manager
            </p>
          </div>
          <button
            onClick={handleLogout}
            title="Logout"
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${darkMode ? "bg-red-900/40 hover:bg-red-800/60 text-red-400" : "bg-red-50 hover:bg-red-100 text-red-500"}`}
          >
            <FaSignOutAlt />
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;