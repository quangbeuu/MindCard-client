import React from "react";

const ChatList = ({ fr = {}, onClick = () => {} }) => {
  return (
    <div
      className="flex items-center justify-between w-full px-[10px] py-[15px] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center">
        <img
          src={fr?.avatarUrl}
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
        />
        <div className="ml-[10px] max-w-[220px] text-[12px]">
          <p className="font-semibold text-[15px] text-short">{fr?.username}</p>
        </div>
      </div>
      <div>25 minutes</div>
    </div>
  );
};

export default ChatList;
