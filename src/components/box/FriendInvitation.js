import React from "react";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useDispatch } from "react-redux";
import { setShowInvitationBox } from "../../store/show/showSlice";

const FriendInvitation = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(setShowInvitationBox(true));
      }}
    >
      <PersonAddIcon className="w-5 h-5 text-[#ffffff] hover:opacity-[0.5] cursor-pointer"></PersonAddIcon>
    </div>
  );
};

export default FriendInvitation;
