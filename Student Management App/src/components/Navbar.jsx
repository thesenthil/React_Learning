import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-sky-600 text-white px-8 py-4 flex justify-between items-center">
      
      <h1 className="text-2xl font-bold">
        Student Portal 🎓
      </h1>

      <div className="flex gap-6">
        <Link
          to="/"
          className="hover:text-yellow-300"
        >
          Home
        </Link>

        <Link
          to="/students"
          className="hover:text-yellow-300"
        >
          Students
        </Link>

        <Link
          to="/about"
          className="hover:text-yellow-300"
        >
          About
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;