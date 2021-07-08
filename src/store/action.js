const ActionType = {
    CHANGE_TAB: "changeTab"
}

const ActionCreator = {
    changeTab: (tab) => ({
        type: ActionType.CHANGE_TAB,
        payload: tab
    })
}

export {
    ActionType,
    ActionCreator
}