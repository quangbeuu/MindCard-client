import { store } from "../store/configureStore";
import { setOpenRoom, setRoomDetails } from "../store/video/slice";
import * as socketConnection from "./socketConnection";

export const createNewRoom = () => {
  store.dispatch(setOpenRoom({ isUserInRoom: true, isUserRoomCreator: true }));
  socketConnection.createNewRoom();
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;
  store.dispatch(setRoomDetails(roomDetails));
};
