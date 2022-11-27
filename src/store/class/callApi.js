import axios from "axios";

export default function requestGetClass(classId = "") {
  // console.log(classId);
  return axios.get(`http://localhost:3000/api/v1/class/${classId}`);
}
