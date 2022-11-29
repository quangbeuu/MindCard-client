import axios from "axios";
import { domain } from "../../utils/common";

export default function requestGetAllCardInSet(setId = "") {
  return axios.get(`${domain}/api/v1/sets/${setId}/getAllCard`);
}
