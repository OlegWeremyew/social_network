import React from 'react';
import {MessagesPageType, StoreType} from "../../../redux/store";
import {addMessageCreator, onMessagePostCreator} from "../../../redux/messagesReducer";
import Messages from "./Messages";
import {StoreContext} from '../../../StoreContext';


const MessagesContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store: StoreType) => {

                    let state: MessagesPageType = store.getState().messagesPage

                    let addMessage = () => {
                        store.dispatch(addMessageCreator())
                    }

                    let onMessagePost = (text: string) => {
                        text ? store.dispatch(onMessagePostCreator(text)) :
                            store.dispatch(onMessagePostCreator(""));
                    }

                    return (
                        <Messages
                            addMessage={addMessage}
                            onMessagePost={onMessagePost}
                            store={state}
                        />
                    );
                }
            }
        </StoreContext.Consumer>
    )

}

export default MessagesContainer;