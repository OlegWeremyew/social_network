import {AppStateType} from "../redux/reduxStore";

export const getChatStatusSelector = (state: AppStateType) => {
    return state.chat.status
}

export const getChatMessagesSelector = (state: AppStateType) => {
    return state.chat.messages
}