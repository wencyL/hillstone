import axios from "axios";
const request = axios.create({
    baseURL: "http://localhost:3000/"
});

request.interceptors.request.use((config: any) => {
    return config;
});

request.interceptors.response.use((res: any) => {
    return res.data;
});

export { request }