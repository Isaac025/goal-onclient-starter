import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://goal-server-orvz.onrender.com/goals",
});
