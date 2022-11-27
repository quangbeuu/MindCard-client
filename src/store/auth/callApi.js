import axios from "axios";

export default function requestGetIsLogin() {
  return axios.get("http://localhost:3000/api/v1/users/isLogin", {
    withCredentials: true,
  });
}
