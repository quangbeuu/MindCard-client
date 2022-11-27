import React from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useDispatch, useSelector } from "react-redux";
import { setShowCardBox } from "../../store/show/showSlice";
import FriendInvitation from "../box/FriendInvitation";
import useAuthStateChanged from "../../hooks/useAuthStateChanged";
const BoxChatHeader = () => {
  const dispatch = useDispatch();
  const { friends, onlineUsers } = useSelector((state) => state.friend);
  const { chosenChatDetails } = useSelector((state) => state.chat);
  // console.log(chosenChatDetails);
  const { user } = useAuthStateChanged();
  const checkOnlineUsers = (friends = [], onlineUsers = []) => {
    return friends.map((f) => {
      const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
      f = { ...f, isOnline: isUserOnline ? true : false };
      return f;
    });
  };

  // console.log(checkOnlineUsers(friends, onlineUsers));
  return (
    <div className="p-[20px] bg-[#4a8063] max-h-[120px] h-full rounded-t-lg flex justify-between flex-none ">
      <div className="">
        <p className="text-white font-semibold text-[16px]">
          {chosenChatDetails.name}
        </p>
        <p className="text-white font-sm">{friends?.length + 1} Member</p>
        <div className="mt-[8px] grid grid-cols-5 gap-[10px] items-center">
          <div className="relative">
            <img
              src={user?.avatarUrl}
              alt="chao"
              className="w-[35px] h-[35px] rounded-full object-cover"
            />
            <div className="w-[10px] h-[10px] bg-green-400 rounded-full absolute top-0 left-[25px]"></div>
          </div>
          {checkOnlineUsers(friends, onlineUsers).map((fr) => (
            <div key={fr?.id} className="relative">
              <img
                src={fr?.avatarUrl}
                alt="chao"
                className="w-[35px] h-[35px] rounded-full object-cover"
              />
              {fr.isOnline && (
                <div className="w-[10px] h-[10px] bg-green-400 rounded-full absolute top-0 left-[25px]"></div>
              )}
            </div>
          ))}

          {/* <div>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="chao"
              className="w-[35px] h-[35px] rounded-full object-cover"
            />
          </div> */}

          <FriendInvitation></FriendInvitation>
        </div>
      </div>
      <div
        className="cursor-pointer hover:text-[white] transition linear duration-200"
        onClick={() => {
          dispatch(setShowCardBox(false));
        }}
      >
        <ClearRoundedIcon></ClearRoundedIcon>
      </div>
    </div>
  );
};

export default BoxChatHeader;
