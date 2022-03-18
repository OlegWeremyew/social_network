import React, {ComponentType} from 'react';
import {initialStateType, MessageActions} from "../../../redux/messagesReducer";
import {Messages} from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect/withAuthRedirect";

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messagesPage: state.messagesPage,
    }
}

const MessagesContainer = compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
        addMessage: MessageActions.addMessage
    }), withAuthRedirect
)(Messages)

export default MessagesContainer

//types===================
type MapStateToPropsType = {
    messagesPage: initialStateType
}

type MapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
