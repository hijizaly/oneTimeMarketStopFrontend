import axios, { AxiosResponse } from 'axios'
import {authLocalStorage} from "./authLocalStorage.ts";


const BASE_URL = import.meta.env.VITE_BASE_URL

const client = axios.create({
    baseURL: BASE_URL,
})

client.interceptors.request.use(
    (config) => {
        const userToken = authLocalStorage.getAccessToken()
        //
        if (userToken) {
            config.headers.Authorization = userToken
        }

        return config
    },
    (error) => {
        // console.log("request error", error);
        return Promise.reject(error)
    }
)

export const axiosRequest = ({ ...options }) => {
    const onSuccess = (response: AxiosResponse) => {
        return response
    }
    return client(options).then(onSuccess)
}
export const axiosForModule = ({ ...options }) => {
    const onSuccess = (response: AxiosResponse) => {
        return response
    }

    const newClient = axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-type': 'application/json'
            // "Authorization":authToken
        }
    })
    return newClient(options).then(onSuccess)
}