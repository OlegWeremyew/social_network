import {chatApi} from "../Api/chatApi";
import {BaseThunkType, InferActionTypes} from "./reduxStore";
import {ChatMessageType} from "../pages/Chat/ChatPage";
import {Dispatch} from "redux";

export enum ChatReducerEnum {
    MESSAGES_RECEIVED = "SOCIAL_NETWORK/CHAT/MESSAGES_RECEIVED",
}

const initialState = {
    messages: [] as ChatMessageType[],
}

export const chatReducer = (state: initialStateType = initialState, action: ActionChatTypes): initialStateType => {
    switch (action.type) {
        case  ChatReducerEnum.MESSAGES_RECEIVED : {
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        }
        default:
            return state
    }
}

export const chatActions = {
    messagesReceived: (messages: ChatMessageType[]) => {
        return {
            type: ChatReducerEnum.MESSAGES_RECEIVED,
            payload: {messages}
        } as const
    },
}

//thunk

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null

const newMessageHandlerCreator = (dispatch: Dispatch) => {

    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(chatActions.messagesReceived(messages))
        }
    }

    return _newMessageHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch: Dispatch) => {
    chatApi.start()
    chatApi.subscribe(newMessageHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch: Dispatch) => {
    chatApi.unSubscribe(newMessageHandlerCreator(dispatch))
    chatApi.stop()
}

export const sendMessage = (message: string): ThunkType => async (dispatch: Dispatch) => {
    chatApi.sendMessage(message)
}

//types

type ThunkType = BaseThunkType<ActionChatTypes>

type initialStateType = typeof initialState

export type ActionChatTypes = InferActionTypes<typeof chatActions>
