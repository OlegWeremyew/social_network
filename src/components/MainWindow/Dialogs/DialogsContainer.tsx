import  {ComponentType} from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {getMessagesPageSelector} from "../../../selectors";
import {compose} from "redux";
import {MessageActions} from "../../../redux/messagesReducer";
import {initialStateMessagesType} from "../../../redux/messagesReducer/types";
import {withAuthRedirect} from "../../../utils";

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
    messagesPage: initialStateMessagesType
}

type MapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType
