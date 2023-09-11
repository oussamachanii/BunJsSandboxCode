import axiosInstance from "axios";

const refreshToken = "refreshTokenExample";

const axios = axiosInstance.create({
  baseURL: Bun.env.APP_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.response.use(
  (response) => {
    console.log(response.status);

    return response;
  },
  async (error) => {
    // Reject promise if usual error
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    error.config._retry = true;

    try {
      const newAccessToken = await axios.get('/refresh-token');
      error.config.headers['Authorization'] = `Bearer ${newAccessToken.data}`;
      return axiosInstance(error.config);
    } catch (refreshError) {
      throw refreshError;
    }
  }
);

export default axios;
