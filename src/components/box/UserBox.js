import React from "react";
import { Link } from "react-router-dom";
import useAuthStateChanged from "../../hooks/useAuthStateChanged";

const UserBox = ({ isOpen = false }) => {
  const { user } = useAuthStateChanged();

  return (
    <div
      className={`box absolute bg-white top-10 right-0 shadow-card rounded-[8px] w-[200px] overflow-hidden ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div className="flex items-center w-full border-b-[1px] border-[#EDEFF4] px-[20px] py-[15px]">
        <img
          src={user.avatarUrl}
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
        />
        <div className="ml-[10px] max-w-[120px] overflow-hidden text-[12px]">
          <p className="font-semibold">{user.name}</p>
          <p className="font-normal">{user.email}</p>
        </div>
      </div>
      <div className="text-[14px] font-semibold">
        <div className="px-5 py-[12px] hover:text-[#ffcd1f] transition ease-in duration-100ms cursor-pointer">
          <Link to="/profile">Profile</Link>
        </div>
        <div className="px-5 py-[12px] hover:text-[#ffcd1f] transition ease-in duration-100ms cursor-pointer">
          <Link to="/settings">Settings</Link>
        </div>
        <div className="px-5 py-[12px] hover:text-[#ffcd1f] transition ease-in duration-100ms cursor-pointer">
          Logout
        </div>
      </div>
    </div>
  );
};

export default UserBox;
