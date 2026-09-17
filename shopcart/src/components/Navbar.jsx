import React from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar({ cart }) {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">

        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}

          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-[#171717]"
          >
            SHOPCART<span className="text-[#a47b3c]"></span>
          </Link>


          {/* NAVIGATION */}

          <div className="hidden md:flex items-center gap-8">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#a47b3c] font-semibold"
                  : "text-gray-600 hover:text-[#171717] transition"
              }
            >
              Home
            </NavLink>


            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive
                  ? "text-[#a47b3c] font-semibold"
                  : "text-gray-600 hover:text-[#171717] transition"
              }
            >
              Categories
            </NavLink>


            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-[#a47b3c] font-semibold"
                  : "text-gray-600 hover:text-[#171717] transition"
              }
            >
              Services
            </NavLink>

          </div>


          {/* RIGHT SIDE */}

          <div className="flex items-center gap-4">

            {/* SEARCH */}

            <div className="hidden lg:block">

              <input
                type="text"
                placeholder="Search products..."
                className="w-52 px-4 py-2.5 bg-[#f7f6f2] border border-gray-200 rounded-full text-sm outline-none focus:border-[#a47b3c] transition"
              />

            </div>


            {/* CART */}

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative px-5 py-2.5 rounded-full text-sm font-medium transition ${
                  isActive
                    ? "bg-[#171717] text-white"
                    : "bg-[#f1eee9] text-[#171717] hover:bg-[#e8e4dc]"
                }`
              }
            >

              Cart

              {/* CART COUNT */}

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-[#a47b3c] text-white text-xs font-bold rounded-full">
                  {cart.length}
                </span>
              )}

            </NavLink>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;