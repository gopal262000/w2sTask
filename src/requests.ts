import axios, { AxiosResponse } from "axios";

// Define the API URL map based on different environments
const apiUrlMap = {
  0: "https://dummyjson.com", // Local Mock url
  1: "", // Testing
  2: "", // Production
};

// Create an Axios instance with the base URL and other configurations
const request = axios.create({
  baseURL: apiUrlMap[0], // Update this as per the environment
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the JWT token in headers
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("w2sToken"); // Adjust this to how you store your JWT
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle responses
request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add an empty export statement to make it a module
export {};

export default request;
