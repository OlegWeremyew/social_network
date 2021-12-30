import React from 'react';
import {MessagesPageType, StoreType} from "../../../redux/store";
import {addMessageCreator, onMessagePostCreator} from "../../../redux/messagesReducer";
import Messages from "./Messages";

type MessagesType = {
    store: StoreType
}

const MessagesContainer = (props: MessagesType) => {

    let state : MessagesPageType = props.store.getState().messagesPage

    let addMessage = () => {
        props.store.dispatch(addMessageCreator())
    }

    let onMessagePost = (text: string) => {
        text ? props.store.dispatch(onMessagePostCreator(text)) :
            props.store.dispatch(onMessagePostCreator(""));
    }

    return (
        <Messages
            addMessage={addMessage}
            onMessagePost={onMessagePost}
            store={state}
        />
    );
}

export default MessagesContainer;