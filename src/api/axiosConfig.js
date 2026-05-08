import axios from "axios";

const axiosModel = axios.create({
  baseURL: "https://carselling-backend.onrender.com",
  timeout: 60000,
  headers: { "Content-Type": "application/json" },
});

//request interceptor
(axiosModel.interceptors.request.use((config) => {
  // Get token from local storage
  const token = localStorage.getItem("token");

  // If token exists, add it to the request headers
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}),
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  });

//response interceptor
axiosModel.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Response error:", error);

    //token expired
    if (error.response && error.response.status === 401) {
      //deleted expired token
      localStorage.removeItem("token");
      console.log("Token expired, please login again.");
      return Promise.reject(new Error("Token expired, please login again."));
    }
  },
);

export default axiosModel;
