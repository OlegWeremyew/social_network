import React from 'react';
import c from "./Messages.module.css"
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";


export type MessagesType = {
    users: Array<UsersType>
    messages: Array<MessageType>
}

export type UsersType = {
    name: string
    id: number
}
export type MessageType = {
    message: string
    id: number
}

const Messages = (props: MessagesType) => {

    let dialogsItem = props.users.map(u => <DialogsItem name={u.name} id={u.id}/>)
    let message = props.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItem}>
                {dialogsItem}
            </div>
            <div className={c.messages}>
                {message}
            </div>
        </div>
    );
}

export default Messages;