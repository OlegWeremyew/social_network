
import {ReadyStatusType} from "../../Api/chatApi/types";
import {ChatMessageType} from "../../redux/chatReducer/types";
import {AppStateType} from "../../redux/types";

export const getChatStatusSelector = (state: AppStateType): ReadyStatusType => {
    return state.chat.status
}

export const getChatMessagesSelector = (state: AppStateType): ChatMessageType[] => {
    return state.chat.messages
}