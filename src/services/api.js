import axios from "axios";

const URL = `https://http://api-factory.simbirsoft/api/entity`;
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
    const api = axios.create({
        headers: {
            'X-Api-Factory-Application-Id:': '5e25c641099b810b946c5d5b',
            
        },
        baseURL: URL,
        timeout: REQUEST_TIMEOUT,
        withCredentials: true
    });

    const onSuccess = (response) => response;

    const onFail = (err) => {
        throw err;
    };

    api.interceptors.response.use(onSuccess, onFail);

    return api;
};