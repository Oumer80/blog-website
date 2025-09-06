import axios from "axios";

const instance = axios.create({
  baseURL: "https://congenial-garbanzo-7vpgqx79x5p9fwr4j-8080.app.github.dev/api",
});

// Add token to headers if exists
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;