import {ReadyStatusType} from "../../../Api/chatApi/types";
import {ChatReducerEnum} from "../constants";
import {v1} from "uuid";
import {ActionChatTypes, ChatMessageType, initialStateType} from "../types";

export const initialChatState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as ReadyStatusType,
}

const subtractedLength: number = 100

export const chatReducer = (state: initialStateType = initialChatState, action: ActionChatTypes): initialStateType => {
    switch (action.type) {
        case  ChatReducerEnum.MESSAGES_RECEIVED : {
            return {
                ...state,
                messages: [...state.messages,  ...action.payload.messages.map( m => ({...m, id: v1() }))]
                    .filter((message, index, array) => index >= array.length - subtractedLength)
            }
        }
        case  ChatReducerEnum.STATUS_CHANGED : {
            return {
                ...state,
                status: action.payload.status
            }
        }
        default:
            return state
    }
}



