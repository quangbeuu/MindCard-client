import React, { useState } from "react";
import { IconButton } from "@mui/material";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import VideocamOffRoundedIcon from "@mui/icons-material/VideocamOffRounded";

const CameraButton = () => {
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const handleToggleCamera = () => {
    setCameraEnabled(!cameraEnabled);
  };
  return (
    <IconButton onClick={handleToggleCamera} style={{ color: "white" }}>
      {cameraEnabled ? <VideocamRoundedIcon /> : <VideocamOffRoundedIcon />}
    </IconButton>
  );
};

export default CameraButton;
