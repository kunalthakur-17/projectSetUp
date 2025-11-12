// apiCore.js

import axios from "axios";
import { url } from "./backendUrl";

// Create Axios instance
const api = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log(token, "token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;
      // if (status === 401) {
      //   // Unauthorized: force logout or redirect
      //   localStorage.removeItem("token");
      //   window.location.href = "/login";
      // }
    }
    return Promise.reject(error);
  }
);

export const apiServices = {
  get: async (url) => await api.get(url),
  post: async (url, body) => await api.post(url, body),
  update: async (url, body) => await api.put(url, body),
  deleteReq: async (url, params) => await api.delete(url, params),
};

export default api;
