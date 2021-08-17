import { adaptPostToOrder } from "../utils.js";
import {
    fetchModelsData,
    fetchCitiesData,
    fetchPickpointData,
    setOrderId
} from "./action.js";


const fetchModelsDataEntity = () => (dispatch, _getState, api) => (
    api.get('/db/car?&limit=30')
        .then(({ data: { data } }) => {
            dispatch(fetchModelsData(data));
            return data;
        })
        .catch((err) => console.log(err))
)

const fetchCitiesEntity = () => (dispatch, _getState, api) => (
    api.get('/db/city')
        .then(({ data: { data } }) => {
            dispatch(fetchCitiesData(data));
            return data;
        })
        .catch((err) => console.log(err))
)

const fetchPickpoint = () => (dispatch, _getState, api) => (
    api.get('/db/point')
        .then(({ data: { data } }) => {
            dispatch(fetchPickpointData(data));
            return data;
        })
        .catch((err) => console.log(err))
)

const fetchModelTagsDataEntity = () => (_dispatch, _getState, api) => (
    api.get('/db/category')
        .then(({ data: { data } }) => {
            return data;
        })
        .catch((err) => console.log(err))
)

const fetchRateDataEntity = () => (_dispatch, _getState, api) => (
    api.get('/db/rate')
        .then(({ data: { data } }) => {
            return data;
        })
        .catch((err) => console.log(err))
)

const postOrder = (orderData) => (dispatch, _getState, api) => (
    api.post('/db/order', orderData)
        .then(({ data: { data: { id } } }) => {
            dispatch(setOrderId(id))
            return id
        })
        .catch((err) => console.log(err))
)

const fetchOrderData = (id) => (_dispatch, _getState, api) => (
    api.get(`/db/order/${id}`)
        .then(({ data: { data } }) => {
            return (adaptPostToOrder(data))
        })
        .catch((err) => console.log(err))
)

export {
    fetchModelsDataEntity,
    fetchCitiesEntity,
    fetchPickpoint,
    fetchModelTagsDataEntity,
    fetchRateDataEntity,
    postOrder,
    fetchOrderData
}