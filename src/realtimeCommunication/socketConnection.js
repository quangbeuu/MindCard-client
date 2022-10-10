import io from "socket.io-client";

let socket = null;

export const connectWithSocketServer = () => {
  // Kết nối socket.io bên server
  socket = io("http://localhost:3000");

  // Lắng nghe sự kiện connect => nếu connect thành công vs server sẽ in ra
  socket.on("connect", () => {
    console.log("successfully connected with socket.io server");
    console.log(socket);
  });
};
