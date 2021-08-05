import { fetchModelsData } from "./action.js";


const fetchModelsDataEntity = () => (dispatch, _getState, api) => (
    api.get('/db/car')
        .then(({ data: { data } }) => {
            dispatch(fetchModelsData(data));
            return data;
        })
        .catch((err) => console.log(err))
)

export {
    fetchModelsDataEntity
}