import React, { useState } from "react";
import { IconButton } from "@mui/material";
import ScreenShareRoundedIcon from "@mui/icons-material/ScreenShareRounded";
import StopScreenShareRoundedIcon from "@mui/icons-material/StopScreenShareRounded";

const ScreenShareButton = () => {
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(true);
  const handleToggleCamera = () => {
    setIsScreenSharingActive(!isScreenSharingActive);
  };
  return (
    <IconButton onClick={handleToggleCamera} style={{ color: "white" }}>
      {isScreenSharingActive ? (
        <ScreenShareRoundedIcon />
      ) : (
        <StopScreenShareRoundedIcon />
      )}
    </IconButton>
  );
};

export default ScreenShareButton;
