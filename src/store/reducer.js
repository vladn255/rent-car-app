import dayjs from "dayjs";
import {
    ActionType,
    Tabs,
    MODEL_FORM_RADIO_DEFAULT_NAME,
    TIME_FORMAT
} from "../const.js";

const initialState = {
    activeTab: Tabs.get('LOCATION'),
    city: '',
    pickpoint: '',
    model: {
        name: '',
        number: '',
        tank: '',
        priceMin: 0
    },
    activeFilter: MODEL_FORM_RADIO_DEFAULT_NAME,
    color: '',
    modelColors: [],
    rate: {
        id: '',
        name: '',
        price: 0,
        unit: ''
    },
    additions: [],
    dateStart: {
        value: dayjs().format(TIME_FORMAT),
        valid: true
    },
    dateFinish: {
        value: '',
        valid: true
    },

    modelsData: [],
    citiesData: [],
    pickpointData: []
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

        case ActionType.SET_MODELS_DATA:
            return {
                ...state,
                modelsData: action.payload
            }

        case ActionType.SET_CITIES_DATA:
            return {
                ...state,
                citiesData: action.payload
            }

        case ActionType.SET_PICKPOINT_DATA:
            return {
                ...state,
                pickpointData: action.payload
            }

        case ActionType.SET_MODEL_COLORS:
            return {
                ...state,
                modelColors: action.payload
            }

        default: {
            return state;
        }
    }
}

export default reducer;