import {AppStateType} from "../redux/reduxStore";
import {initialStateType} from "../redux/messagesReducer";

export const getMessagesPageSelector = (state: AppStateType): initialStateType => {
    return state.messagesPage
}