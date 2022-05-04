import {UserReducerEnum} from "../constants";

export const MessageActions = {
    addMessage: (newMessageText: string) => {
        return {type: UserReducerEnum.ADD_MESSAGE, payload: {newMessageText}} as const
    },
    deleteMessage: (messageId: number) => {
        return {type: UserReducerEnum.DELETED_MESSAGE, payload: {messageId}} as const
    },
}