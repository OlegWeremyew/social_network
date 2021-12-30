import React from 'react';
import {RootStateType} from "../../../redux/store";
import {addMessageCreator, onMessagePostCreator} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state: RootStateType) => {
    return {
        messagesPage: state.messagesPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
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

export let MessagesContainer: any = connect(mapStateToProps, mapDispatchToProps)(Messages)
