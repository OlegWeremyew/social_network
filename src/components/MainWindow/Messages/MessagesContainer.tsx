import React from 'react';
import {addMessageCreator, initialStateType, onMessagePostCreator} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    messagesPage: initialStateType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    addMessage: () => void
    onMessagePost: (text: string) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator())
        },
        onMessagePost: (text: string) => {
            text ? dispatch(onMessagePostCreator(text)) :
                dispatch(onMessagePostCreator(""));
        },
    }
}

export let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)
