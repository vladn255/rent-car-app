import axios from "axios";

const URL = `https://api-factory.simbirsoft1.com/api`;
const REQUEST_TIMEOUT = 10000;
const APPLICATION_ID = '5e25c641099b810b946c5d5b'
const RANDOM_STRING = 'u5taw48o'
const SECRET = '4cbcea96de';
const bearerCode = btoa(`${RANDOM_STRING}:${SECRET}`);

export const createAPI = () => {
    const api = axios.create({
        headers: {
            'X-Api-Factory-Application-Id': APPLICATION_ID,
            'Authorization': `Bearer ${bearerCode}`
        },
        baseURL: URL,
        timeout: REQUEST_TIMEOUT
    });

    const onSuccess = (response) => response;

    const onFail = (err) => {
        throw err;
    };

    api.interceptors.response.use(onSuccess, onFail);

    return api;
};