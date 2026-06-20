import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaUtensils,
  FaClipboardList,
  FaHistory,
  FaStar,
  FaTruck,
  FaSignOutAlt,
} from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const menuItems = [
    { name: "Dashboard",     path: "/",              icon: <FaHome /> },
    { name: "Menu",          path: "/menu",          icon: <FaUtensils /> },
    { name: "Orders",        path: "/orders",        icon: <FaClipboardList /> },
    { name: "Order History", path: "/orders/history",icon: <FaHistory /> },
    { name: "Reviews",       path: "/reviews",       icon: <FaStar /> },
    { name: "Delivery",      path: "/delivery",      icon: <FaTruck /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <aside className={`w-64 min-h-screen sticky top-0 flex flex-col border-r transition-colors ${
      darkMode
        ? "bg-slate-900 border-slate-800 text-white"
        : "bg-slate-900 border-slate-800 text-white"
    }`}>

      {/* Logo */}
      <div className="px-6 py-7 border-b border-slate-800">
        <h1 className="text-2xl font-extrabold text-orange-400 tracking-wide">
           Saffron Spice
        </h1>
        <p className="text-slate-400 text-xs mt-1">
          Restaurant Admin Panel
        </p>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 px-3 py-5">
        <p className="text-xs uppercase tracking-widest text-slate-500 px-3 mb-3">
          Main Menu
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                  active
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-900/30"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Logout at the bottom */}
      <div className="p-4 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-900/30 transition-colors text-sm font-medium"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;