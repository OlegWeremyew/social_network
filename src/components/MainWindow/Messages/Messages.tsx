import React, {ChangeEvent} from 'react';
import c from "./Messages.module.css"
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";
import {UsersPropsType} from "./MessagesContainer";

const Messages = (props: UsersPropsType) => {

    let addMessage = () => {
        props.addMessage()
    }

    let onMessagePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.onMessagePost(newText)
    }

    let dialogsItem = props.messagesPage.users.map(u => <DialogsItem key={u.id} name={u.name} id={u.id}
                                                                           img={u.img}/>)
    let message = props.messagesPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItem}>
                {dialogsItem}
            </div>
            <div className={c.messages}>
                {message}
                <div>
                    <textarea onChange={onMessagePost} value={props.messagesPage.newMessageText}
                              rows={10} cols={44} placeholder={'Write your message'}/>
                </div>
                <div>
                    <button disabled={props.messagesPage.newMessageText.trim()===''} onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;