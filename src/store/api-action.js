import { fetchModelsData, fetchCitiesData, fetchPickpointData } from "./action.js";


const fetchModelsDataEntity = () => (dispatch, _getState, api) => (
    api.get('/db/car?&limit=10')
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

export {
    fetchModelsDataEntity,
    fetchCitiesEntity,
    fetchPickpoint,
    fetchModelTagsDataEntity,
    fetchRateDataEntity
}