import io from "socket.io-client";
import {
  setCardList,
  setCardListReal,
  setCardStudied,
  setNoCardStudied,
} from "../store/card/slice";
import {
  setFriends,
  setOnlineUsers,
  setPendingFriendInvitation,
} from "../store/friend/friendSlice";

import { setPendingMemberInvitations } from "../store/member/memberSlice";
import { updateDirectChatHistoryIfActive } from "../utils/chat";

let socket = null;

export const connectWithSocketServer = (user, dispatch) => {
  // Kết nối socket.io bên server
  socket = io("http://localhost:3000", {
    // Truyền dữ liệu ng dùng sang backend
    auth: { user },
  });

  // Lắng nghe sự kiện connect => nếu connect thành công vs server sẽ in ra
  socket.on("connect", () => {
    console.log("successfully connected with socket.io server");
    // console.log(socket);
  });

  // Lắng nghe sự kiện member-invitations
  socket.on("member-invitations", (data) => {
    const { pendingInvitations } = data;

    dispatch(setPendingMemberInvitations(pendingInvitations));
  });

  // Lắng nghe sự kiện friend-invitations
  socket.on("friend-invitations", (data) => {
    const { pendingInvitations } = data;
    // console.log(pendingInvitations);

    dispatch(setPendingFriendInvitation(pendingInvitations));
  });

  // Lắng nghe sự kiện lấy friends-list
  socket.on("friends-lists", (data) => {
    const { friends } = data;
    // console.log(friends);
    dispatch(setFriends(friends));
  });

  // Lắng nghe sự kiện ng dùng online

  socket.on("online-users", (data) => {
    // console.log("user-online");
    const { onlineUsers } = data;
    dispatch(setOnlineUsers(onlineUsers));
  });

  socket.on("direct-chat-history", (data) => {
    updateDirectChatHistoryIfActive(data);
  });

  socket.on("sendCardToClient", (data) => {
    dispatch(setCardList(data));
  });

  socket.on("getCardInClient", (data) => {
    dispatch(setCardListReal(data));
  });

  socket.on("sendStudiedCardToClient", (data) => {
    dispatch(setCardStudied(data));
  });

  socket.on("sendNotStudiedCardToClient", (data) => {
    dispatch(setNoCardStudied(data));
  });
};

export const createCard = (data) => {
  socket?.emit("create-card", data);
};

export const deleteCard = (data) => {
  socket?.emit("delete-card", data);
};

export const joinSet = (id) => {
  socket?.emit("join-set", id);
};

export const joinChatRoom = () => {};

export const getCard = (id) => {
  socket?.emit("get-card", id);
};

export const getStudied = (setId) => {
  socket?.emit("get-studied", setId);
};

export const getNotStudied = (setId) => {
  socket?.emit("get-not-studied", setId);
};

// Chat
export const sendDirectMessage = (data) => {
  console.log(data);
  socket?.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
  console.log(data);
  socket?.emit("direct-chat-history", data);
};
