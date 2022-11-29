import { createSlice } from "@reduxjs/toolkit";
const videoSlice = createSlice({
  name: "video",
  initialState: {
    // 1. Ktra xem người dùng đã ở 1 phòng video nào k
    isUserInRoom: false,

    // 2. Ktra xem ng dùng có phải người tạo phòng k
    isUserRoomCreator: false,
    roomDetails: [],
    // 3. Thông tin về các phòng đang hoạt động mà ta có thể tham gia vào
    activeRooms: [],

    // 4. Luồng cục bộ
    localStream: null,
    // 5. Luồng từ xa
    remoteStreams: [],

    audioOnly: false,

    screenSharingStream: null,
    isScreenSharingActive: false,
  },

  reducers: {
    setOpenRoom: (state, action) => {
      return {
        ...state,
        isUserInRoom: action.payload.isUserInRoom,
        isUserRoomCreator: action.payload.isUserRoomCreator,
      };
    },
    setRoomDetails: (state, action) => ({
      ...state,
      roomDetails: action.payload,
    }),
  },
});

export const { setOpenRoom, setRoomDetails } = videoSlice.actions;

export default videoSlice.reducer;
