import React, {ChangeEvent} from 'react';
import c from "./Messages.module.css"
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";
import {UsersPropsType} from "./MessagesContainer";
import {ReduxAddMessageForm} from "./AddMessageForm/AddMessageForm";

export type FormMessagesType = {
    newMessageText: string
}

export const Messages = (props: UsersPropsType) => {

    const dialogsItem = props.messagesPage.users
        .map(u => <DialogsItem key={u.id} name={u.name} id={u.id} img={u.img}/>)
    const message = props.messagesPage.messages
        .map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    const addMessage = (values: FormMessagesType) => {
        props.addMessage(values.newMessageText)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItem}>
                {dialogsItem}
            </div>
            <div className={c.messages}>
                {message}
            </div>
            <ReduxAddMessageForm onSubmit={addMessage}/>
        </div>
    );
}