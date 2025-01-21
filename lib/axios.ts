import axios from "axios";

const client = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/`,
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
});

export default client;
