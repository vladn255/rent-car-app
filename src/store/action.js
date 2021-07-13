import { ActionType } from "../const";
const changeTab = (tab) => ({
    type: ActionType.CHANGE_TAB,
    payload: tab
})


export {
    changeTab
}