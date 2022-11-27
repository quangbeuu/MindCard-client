import axios from "axios";
import { domain } from "../../firebase.config";

export default function requestGetTest(testId = "") {
  return axios.get(`${domain}/api/v1/test/${testId}`);
}
