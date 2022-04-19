import {AppStateType} from "../redux/reduxStore";

export const getMessagesPageSelector = (state: AppStateType) => {
    return state.messagesPage
}