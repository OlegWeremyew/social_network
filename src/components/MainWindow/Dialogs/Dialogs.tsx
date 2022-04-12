import React from 'react';
import style from "./Dialogs.module.css"

import DialogsItem from "./DialogItem/DialogsItem";
import {UsersPropsType} from "./DialogsContainer";
import {ReduxAddMessageForm} from "./AddMessageForm/AddMessageForm";
import Dialog from "./Dialog/Dialog";

export const Dialogs = ({messagesPage, addMessage}: UsersPropsType) => {

    const dialogsItem = messagesPage.users
        .map(user => {
            return (
                <DialogsItem
                    key={user.id}
                    name={user.name}
                    id={user.id}
                    img={user.img}
                />
            )
        })

    const message = messagesPage.messages
        .map(message => {
            return (
                <Dialog
                    key={message.id}
                    message={message.message}
                    id={message.id}
                />
            )
        })

    const addNewMessage = (values: FormMessagesType) => {
        addMessage(values.newMessageText)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__dialog}>
                <div className={style.dialogItem}>
                    {dialogsItem}
                </div>
                <div className={style.messages}>
                    {message}
                </div>
            </div>
            <ReduxAddMessageForm onSubmit={addNewMessage}/>
        </div>
    )
}

export type FormMessagesType = {
    newMessageText: string
}