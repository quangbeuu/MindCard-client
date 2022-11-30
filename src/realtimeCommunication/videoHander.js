import { store } from "../store/configureStore";
import {
  setOpenRoom,
  setRoomDetails,
  setActiveRooms,
} from "../store/video/slice";
import * as socketConnection from "./socketConnection";
import * as webRtcHandler from "./webRTCHandler";

export const createNewRoom = () => {
  const successCallbackFun = () => {
    store.dispatch(
      setOpenRoom({ isUserInRoom: true, isUserRoomCreator: true })
    );
    socketConnection.createNewRoom();
  };

  // Lấy đc quyền truy cập vào Local Stream thì mới tạo phòng
  webRtcHandler.getLocalStreamPreview(false, successCallbackFun);
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;
  store.dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data) => {
  const { activeRooms } = data;

  const friends = store.getState().friend.friends;

  const rooms = [];

  activeRooms.forEach((room) => {
    friends.forEach((f) => {
      if (f.id === room.roomCreator.userId) {
        rooms.push({ ...room, creatorUserName: f.username });
      }
    });
  });

  store.dispatch(setActiveRooms(rooms));
};

export const joinVideoCall = (roomId) => {
  store.dispatch(setRoomDetails({ roomId }));
  store.dispatch(setOpenRoom({ isUserInRoom: true, isUserRoomCreator: false }));
  socketConnection.joinVideoCall({ roomId });
};

export const leaveRoom = () => {
  const roomId = store.getState().video.roomDetails.roomId;
  socketConnection.leaveRoom({ roomId });
  store.dispatch(setRoomDetails(null));
  store.dispatch(
    setOpenRoom({ isUserInRoom: false, isUserRoomCreator: false })
  );
};
