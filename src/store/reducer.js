import { ActionType, Tabs } from "../const.js";

const initialState = {
    activeTab: Tabs.get('LOCATION')
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.CHANGE_TAB:
            return {
                ...state,
                activeTab: action.payload
            }

        default: {
            return state;
        }
    }
}

export default reducer;