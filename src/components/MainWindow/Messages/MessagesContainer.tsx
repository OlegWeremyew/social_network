import React, {ComponentType} from 'react';
import {initialStateType, MessageActions} from "../../../redux/messagesReducer";
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messagesPage: state.messagesPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(MessageActions.addMessageCreator(newMessageText))
        },
    }
}

const MessagesContainer = compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps), withAuthRedirect
)(Messages)

export default MessagesContainer
