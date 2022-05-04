import {AppStateType} from "../../redux/reduxStore";
import {initialStateMessagesType} from "../../redux/messagesReducer/types";

export const getMessagesPageSelector = (state: AppStateType): initialStateMessagesType => {
    return state.messagesPage
}