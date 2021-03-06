import { ActionType } from "../const";

const changeTab = (tab) => ({
    type: ActionType.CHANGE_TAB,
    payload: tab
});

const setLocation = (location) => ({
    type: ActionType.SET_LOCATION,
    payload: location
});

const setModel = (model) => ({
    type: ActionType.SET_MODEL,
    payload: model
});

const setActiveFilter = (filter) => ({
    type: ActionType.SET_ACTIVE_FILTER,
    payload: filter
})

const setColor = (color) => ({
    type: ActionType.SET_COLOR,
    payload: color
});

const setRate = (rate) => ({
    type: ActionType.SET_RATE,
    payload: rate
});

const setAdditions = (additions) => ({
    type: ActionType.SET_ADDITIONS,
    payload: additions
});

const setDate = (date) => ({
    type: ActionType.SET_DATE,
    payload: date
});

const fetchModelsData = (data) => ({
    type: ActionType.SET_MODELS_DATA,
    payload: data
});

const fetchCitiesData = (data) => ({
    type: ActionType.SET_CITIES_DATA,
    payload: data
})

const fetchPickpointData = (data) => ({
    type: ActionType.SET_PICKPOINT_DATA,
    payload: data
})

const setModelColors = (data) => ({
    type: ActionType.SET_MODEL_COLORS,
    payload: data
})

const setFuelTank = (fuel) => ({
    type: ActionType.SET_FUEL_TANK,
    payload: fuel
})

const setOrderId = (id) => ({
    type: ActionType.SET_ORDER_ID,
    payload: id
})

const setPrice = (price) => ({
    type: ActionType.SET_PRICE,
    payload: price
})

const setOrderData = (orderData) => ({
    type: ActionType.SET_ORDER_DATA,
    payload: orderData
})

export {
    changeTab,
    setLocation,
    setModel,
    setActiveFilter,
    setColor,
    setRate,
    setAdditions,
    setDate,
    fetchModelsData,
    fetchCitiesData,
    fetchPickpointData,
    setModelColors,
    setFuelTank,
    setOrderId,
    setPrice,
    setOrderData
}