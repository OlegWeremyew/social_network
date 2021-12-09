import React, {RefObject, useRef} from 'react';
import c from "./Messages.module.css"
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";
import {MessagesPageType} from "../../../redux/state";

type MessagesType = {
    state: MessagesPageType
    addMessage: (AddNewMessage: string) => void
    updateNewMessageText: (newMessageText: string) => void
}

const Messages = (props: MessagesType) => {

    let newMessageElement = useRef<HTMLTextAreaElement>(null);

    let addMessage = () => {
        let text = newMessageElement.current?.value
        if (text) props.addMessage(text)
        if (newMessageElement.current) newMessageElement.current.value = ''
    }

    let onMessagePost = () => {
        let text = newMessageElement.current?.value
        text? props.updateNewMessageText(text) : props.updateNewMessageText("")
    }

    let dialogsItem = props.state.users.map(u => <DialogsItem name={u.name} id={u.id} img={u.img}/>)
    let message = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItem}>
                {dialogsItem}
            </div>
            <div className={c.messages}>
                {message}
                <div>
                    <textarea onChange={onMessagePost} value={props.state.newMessageText} ref={newMessageElement} rows={10} cols={44} placeholder={'Write your message'}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;