import React from "react";
import { styled } from "@mui/material";

import ScreenShareButton from "./ScreenShareButton";
import MicButton from "./MicButton";
import CloseRoomButton from "./CloseRoomButton";
import CameraButton from "./CameraButton";

const MainContainer = styled("div")({
  height: "15%",
  width: "100%",
  backgroundColor: "#4a8063",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
});

const RoomButtons = () => {
  return (
    <MainContainer>
      <ScreenShareButton></ScreenShareButton>
      <MicButton></MicButton>
      <CloseRoomButton></CloseRoomButton>
      <CameraButton></CameraButton>
    </MainContainer>
  );
};

export default RoomButtons;
