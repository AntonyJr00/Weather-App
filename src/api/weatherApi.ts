import axios from "axios";
import { getEnvVariables } from "../helper/getEnvVariables";

const { API_URL, API_KEY } = getEnvVariables();
const weatherApi = axios.create({
  baseURL: API_URL,
  params: {
    appid: API_KEY,
    units: "Metric",
  },
});

export default weatherApi;
