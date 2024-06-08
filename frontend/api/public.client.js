import axios from "axios";
import queryString from "query-string"
const baseURL = 'https://bisa-client.vercel.app/api/v1'

const publicClient = axios.create ({
    baseURL,
    paramsSerializer: {
        encode: params => queryString.stringify(params)
    }
});

publicClient.interceptors.request.use(async config => {
    return {
        ... config,
        headers: {
            "Content-Type": "application/json"
        }
    }
});