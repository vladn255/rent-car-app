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

export {
    changeTab,
    setLocation,
    setModel,
    setActiveFilter,
    setColor,
    setRate,
    setAdditions,
    setDate
}