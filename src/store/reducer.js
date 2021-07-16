import { ActionType, Tabs, ModelTypes, Colors, Rates } from "../const.js";

const initialState = {
    activeTab: Tabs.get('LOCATION'),
    city: '',
    pickpoint: '',
    model: '',
    activeFilter: ModelTypes.ALL_MODELS,
    color: Colors.ALL_COLOR,
    rate: Rates.BY_DAY,
    additions: [],
    dateStart: '12.06.2019 12:00',
    dateFinish: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.CHANGE_TAB:
            return {
                ...state,
                activeTab: action.payload
            }

        case ActionType.SET_LOCATION:
            return {
                ...state,
                city: action.payload.city,
                pickpoint: action.payload.pickpoint
            }

        case ActionType.SET_MODEL:
            return {
                ...state,
                model: action.payload
            }

        case ActionType.SET_ACTIVE_FILTER:
            return {
                ...state,
                activeFilter: action.payload
            }

        case ActionType.SET_COLOR:
            return {
                ...state,
                color: action.payload
            }

        case ActionType.SET_RATE:
            return {
                ...state,
                rate: action.payload
            }

        case ActionType.SET_ADDITIONS:
            return {
                ...state,
                additions: action.payload
            }

        case ActionType.SET_DATE:
            return {
                ...state,
                dateStart: action.payload.dateStart,
                dateFinish: action.payload.dateFinish
            }

        default: {
            return state;
        }
    }
}

export default reducer;