import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropdown";
import logo from "../assets/logo.png";

function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);

  const { userData } = useSelector((state) => state.user);

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <div
      className="
        w-full
        flex items-center justify-between
        px-4 md:px-8
        py-4 md:py-5
        bg-black/40
        backdrop-blur-xl
        border border-white/10
        rounded-2xl
        shadow-lg
      "
    >
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-[0_0_15px_rgba(108,93,209,0.6)]"
        />

        <div>
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-white">
            3D Plotter
          </h1>

          {/* Mobile Welcome */}
          <p className="text-sm text-gray-400 md:hidden">
            Welcome, {userData?.fullName || "User"}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex items-center gap-3">
        {/* Desktop Welcome */}
        <span className="hidden md:block text-gray-300 font-medium">
          Welcome, {userData?.fullName || "User"}
        </span>

        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="
            cursor-pointer
            p-2.5
            bg-white/5
            border border-white/10
            rounded-full
            hover:bg-white/10
            transition-all duration-300
          "
        >
          <CgProfile className="text-white text-3xl" />
        </button>

        {showDropdown && (
          <ProfileDropdown
            user={userData}
            onLogout={handleLogout}
          />
        )}
      </div>
    </div>
  );
}

export default Nav;