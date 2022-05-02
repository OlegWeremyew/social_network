import React, {ComponentType} from 'react';
import {initialStateType, MessageActions} from "../../../redux/messagesReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect/withAuthRedirect";
import {getMessagesPageSelector} from "../../../selectors";

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messagesPage: getMessagesPageSelector(state)
    }
}

const DialogsContainer = compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
        addMessage: MessageActions.addMessage
    }), withAuthRedirect
)(Dialogs)

export default DialogsContainer

//types===================
type MapStateToPropsType = {
    messagesPage: initialStateType
}

type MapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
