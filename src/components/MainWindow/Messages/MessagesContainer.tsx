import React, {ComponentType} from 'react';
import {addMessageCreator, initialStateType} from "../../../redux/messagesReducer";
import {Messages} from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect/withAuthRedirect";

type MapStateToPropsType = {
    messagesPage: initialStateType
}

type MapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        messagesPage: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(addMessageCreator(newMessageText))
        },
    }
}

export let MessagesContainer = compose<ComponentType>(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Messages)
