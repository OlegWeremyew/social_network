import {initialStateMessagesType} from "../../../../redux/messagesReducer/types";

export type MapStateToPropsType = {
    messagesPage: initialStateMessagesType
}

export type MapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
}

export type DialogPropsType = MapStateToPropsType & MapDispatchToPropsType