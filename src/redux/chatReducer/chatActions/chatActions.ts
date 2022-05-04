import {ReadyStatusType} from "../../../Api/chatApi/types";
import {ChatMessageType} from "../types";
import {ChatReducerEnum} from "../constants";

export const chatActions = {
    messagesReceived: (messages: ChatMessageType[]) => {
        return {
            type: ChatReducerEnum.MESSAGES_RECEIVED,
            payload: {messages}
        } as const
    },
    statusChanged: (status: ReadyStatusType) => {
        return {
            type: ChatReducerEnum.STATUS_CHANGED,
            payload: {status},
        } as const
    },
}