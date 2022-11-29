import React from "react";
import { IconButton } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const CloseRoomButton = () => {
  const handleLeaveRoom = () => {};
  return (
    <IconButton onClick={handleLeaveRoom} style={{ color: "white" }}>
      <CloseRoundedIcon />
    </IconButton>
  );
};

export default CloseRoomButton;
