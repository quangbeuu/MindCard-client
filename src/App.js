import React from "react";

import "./App.scss";

import axios from "axios";
import Router from "./Router";
import Alert from "./components/common/Alert";
import { useSelector } from "react-redux";

axios.defaults.withCredentials = true;
// Nếu bạn muốn sử dụng Cookie với Axios,
// bạn cần bao gồm thuộc tính withCredentials.
// => Lệnh này để thêm vào tất cả req withCredentials: true
function App() {
  const { showAlert, message, type } = useSelector((state) => state.alert);

  // console.log({ showAlert, message, type });
  return (
    <>
      <Router></Router>
      <Alert show={showAlert} message={message} type={type}></Alert>
    </>
  );
}

export default App;
