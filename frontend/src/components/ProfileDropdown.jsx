import React from "react";
import { serverUrl } from "../App";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";

function ProfileDropdown({ user, onLogout }) {
    const dispatch = useDispatch();
     const handleLogout = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/auth/signout`, {
        withCredentials: true,
      });
      
      dispatch(setUserData(null));
    } catch (error) {
      console.log("Error during signout:", error);
    }
  };
  return (
    <div className="absolute right-0 top-12 w-64 rounded-xl bg-[#111827] border border-white/10 shadow-lg">
      <div className="p-4">
        <h3 className="text-white font-semibold">
          {user?.fullName}
        </h3>

        <p className="text-sm text-gray-400">
          {user?.email}
        </p>
      </div>

      <div className="border-t border-white/10" />

      <button
        onClick={handleLogout}
        className="w-full text-left px-4 py-3 text-red-400 hover:bg-white/5 transition cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default ProfileDropdown;