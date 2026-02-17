import axios from "axios";

const config = {
  baseURL: "/EcosystemAlpha-test",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const publicApi = axios.create(config);
