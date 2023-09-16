/* eslint-disable no-undef */
import axios from "axios";

const springmartAPI = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 8000,
});

export default springmartAPI;
