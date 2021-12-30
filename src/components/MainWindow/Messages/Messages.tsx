import React, {ChangeEvent} from 'react';
import c from "./Messages.module.css"
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";
import {addMessageCreator, onMessagePostCreator} from "../../../redux/messagesReducer";
import {MessagesPageType} from "../../../redux/store";

type MessagesType = {
    store: MessagesPageType
    addMessage: () => void
    onMessagePost: (newText: string) => void
}

const Messages = (props: MessagesType) => {

    let addMessage = () => {
        props.addMessage()
    }

    let onMessagePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.onMessagePost(newText)
    }

    let dialogsItem = props.store.users.map(u => <DialogsItem key={u.id} name={u.name} id={u.id}
                                                                           img={u.img}/>)
    let message = props.store.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItem}>
                {dialogsItem}
            </div>
            <div className={c.messages}>
                {message}
                <div>
                    <textarea onChange={onMessagePost} value={props.store.newMessageText}
                              rows={10} cols={44} placeholder={'Write your message'}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;