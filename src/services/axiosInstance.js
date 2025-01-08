import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiUrl = process.env.REACT_APP_API_KEY; // lấy api key từ file env

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: { "Content-Type": "application/json" },
  responseType: "json",
});

// config request sẽ tự set accesstoken nếu có
axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await AsyncStorage.getItem("accessToken");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

export default axiosInstance;
