import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("admintoken");
    window.location.reload();
  };
  return (
    <div className="bg-gray-800 text-white w-64 p-4 min-h-screen">
      <div className="text-2xl font-bold mb-6">swiftHire</div>
      <ul className="space-y-4">
        <li>
          <Link
            to="/view-job"
            className="flex items-center space-x-2 text-white hover:text-gray-300"
          >
            <span className="material-icons">Jop posted</span>
          </Link>
        </li>
        <li>
          <Link
            to="/add-job"
            className="flex items-center space-x-2 text-white hover:text-gray-300"
          >
            <span className="material-icons">Add New Job</span>
          </Link>
        </li>
        <li>
          <button
            className="flex items-center space-x-2 text-white hover:text-gray-300"
            onClick={handleLogout}
          >
            <span className="material-icons">Log Out</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
