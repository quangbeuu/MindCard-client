import React from "react";

const MemberItem = () => {
  return (
    <div className="px-[20px] py-[12px] bg-[#fff] flex items-center cursor-pointer shadow-profile">
      <img
        src="https://images.unsplash.com/photo-1648371477306-42e7c73b3aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="avatar"
        className="w-[60px] h-[60px] rounded-full object-cover cursor-pointer mr-[20px]"
      />
      <div className="ml-[10px] max-w-[120px]">
        <p className="text-[14px] font-semibold text-[#929bb4]">Class Admin</p>
        <p className="font-semibold text-[18px] font-bold">quangvu9501</p>
      </div>
    </div>
  );
};

export default MemberItem;
