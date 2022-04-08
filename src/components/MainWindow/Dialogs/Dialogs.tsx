import React from 'react';
import c from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogsItem";
import {UsersPropsType} from "./DialogsContainer";
import {ReduxAddMessageForm} from "./AddMessageForm/AddMessageForm";
import Dialog from "./Dialog/Dialog";

export const Dialogs = ({messagesPage, addMessage}: UsersPropsType) => {

    const dialogsItem = messagesPage.users
        .map(user => <DialogsItem key={user.id} name={user.name} id={user.id} img={user.img}/>)
    const message = messagesPage.messages
        .map(m => <Dialog key={m.id} message={m.message} id={m.id}/>)

    const addNewMessage = (values: FormMessagesType) => {
        addMessage(values.newMessageText)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItem}>
                {dialogsItem}
            </div>
            <div className={c.messages}>
                {message}
            </div>
            <ReduxAddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}

export type FormMessagesType = {
    newMessageText: string
}