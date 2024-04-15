import axios from "axios";

export const API_KEY = "41ea9d0db43c66c3e43c7fbe6eb1cbe2";
const API_URL = "https://api.openweathermap.org/data/2.5";

export const apiInstance = axios.create({
  baseURL: API_URL,
});

export default apiInstance;
