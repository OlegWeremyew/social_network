import {ComponentType} from 'react';
import {connect} from "react-redux";
import {getMessagesPageSelector} from "../../../selectors";
import {compose} from "redux";
import {MessageActions} from "../../../redux/messagesReducer";
import {withAuthRedirect} from "../../../utils";
import {AppStateType} from "../../../redux/types";
import {MapDispatchToPropsType, MapStateToPropsType} from "./types";
import {Dialogs} from "./Dialogs";

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

