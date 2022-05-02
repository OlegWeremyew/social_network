
import {BaseThunkType, InferActionTypes} from "./reduxStore";
import {ChatMessageAPIType} from "../pages/Chat/ChatPage";
import {Dispatch} from "redux";
import {v1} from "uuid";
import {ReadyStatusType} from "../Api/chatApi/types";
import {chatApi} from "../Api";
import {Nullable} from "../types/Nullable";

export enum ChatReducerEnum {
    MESSAGES_RECEIVED = "SOCIAL_NETWORK/CHAT/MESSAGES_RECEIVED",
    STATUS_CHANGED = "SOCIAL_NETWORK/CHAT/STATUS_CHANGED",
}

const initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as ReadyStatusType,
}

const subtractedLength: number = 100

export const chatReducer = (state: initialStateType = initialState, action: ActionChatTypes): initialStateType => {
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

let _statusChangedHandler: Nullable<((status: ReadyStatusType) => void)> = null

const statusChangedHandlerCreator = (dispatch: Dispatch) => {

    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(chatActions.statusChanged(status))
        }
    }

    return _statusChangedHandler
}

export const startMessagesListening = (): ThunkType => async (dispatch: Dispatch) => {
    chatApi.start()
    chatApi.subscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatApi.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}

export const stopMessagesListening = (): ThunkType => async (dispatch: Dispatch) => {
    chatApi.unSubscribe('messages-received', newMessageHandlerCreator(dispatch))
    chatApi.unSubscribe('status-changed', statusChangedHandlerCreator(dispatch))
    chatApi.stop()
}

export const sendMessage = (message: string): ThunkType => async (dispatch: Dispatch) => {
    chatApi.sendMessage(message)
}

//types

type ThunkType = BaseThunkType<ActionChatTypes>

type initialStateType = typeof initialState

export type ActionChatTypes = InferActionTypes<typeof chatActions>

export type ChatMessageType = ChatMessageAPIType & {id: string}
