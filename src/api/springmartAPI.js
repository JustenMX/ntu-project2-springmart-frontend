import axios from "axios";

const springmartAPI = axios.create({
  baseURL: "http://localhost:9090",
  timeout: 8000,
});

export default springmartAPI;
