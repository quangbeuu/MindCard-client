import axios from "axios";

export default function requestGetAllCardInSet(setId = "") {
  return axios.get(`http://localhost:3000/api/v1/sets/${setId}/getAllCard`);
}
