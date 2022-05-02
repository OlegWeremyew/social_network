import React from 'react';
import style from "./Dialogs.module.css"

import DialogsItem from "./DialogItem/DialogsItem";
import {UsersPropsType} from "./DialogsContainer";
import {ReduxAddMessageForm} from "./AddMessageForm/AddMessageForm";
import Dialog from "./Dialog/Dialog";
import {ReturnComponentType} from "../../../types/ReturnComponentType";

export const Dialogs:React.FC<UsersPropsType> = ({messagesPage, addMessage}): ReturnComponentType => {

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
        <section className={style.dialogs}>
            <div className={style.dialogs__dialog}>
                <div className={style.dialogItem}>
                    {dialogsItem}
                </div>
                <div className={style.messages}>
                    {message}
                </div>
            </div>
            <ReduxAddMessageForm onSubmit={addNewMessage}/>
        </section>
    )
}

export type FormMessagesType = {
    newMessageText: string
}