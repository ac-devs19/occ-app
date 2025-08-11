import axiosClient from "axios";
import { getToken } from "~/services/auth-storage";

const axios = axiosClient.create({
  baseURL: "https://occph.com/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});

axios.interceptors.request.use(async (req) => {
  const token = await getToken();

  if (token !== null) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }

  return req;
});

export default axios;
