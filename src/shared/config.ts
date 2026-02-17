import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const config = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const publicApi = axios.create(config);
