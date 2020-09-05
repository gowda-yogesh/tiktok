import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "https://yog-tiktok-backend.herokuapp.com/"
});

export default axiosInstance;
