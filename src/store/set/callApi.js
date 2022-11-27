import axios from "axios";
import { domain } from "../../firebase.config";

export default function requestGetSet(setId = "") {
  return axios.get(`${domain}/api/v1/sets/${setId}`);
}
