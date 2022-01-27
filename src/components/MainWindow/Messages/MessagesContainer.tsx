import React, {ComponentType} from 'react';
import {addMessageCreator, initialStateType, onMessagePostCreator} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect/withAuthRedirect";

type MapStateToPropsType = {
    messagesPage: initialStateType
}

type MapDispatchToPropsType = {
    addMessage: () => void
    onMessagePost: (text: string) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        messagesPage: state.messagesPage,
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

export let MessagesContainer = compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Messages)
