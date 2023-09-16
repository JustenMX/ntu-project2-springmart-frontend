import axios from "axios";

const openmapAPI = axios.create({
  baseURL: "https://www.onemap.gov.sg/api/common/elastic",
  timeout: 8000,
});

export default openmapAPI;
