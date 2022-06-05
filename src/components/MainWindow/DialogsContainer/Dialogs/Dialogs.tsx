import React from 'react';
import style from "./Dialogs.module.scss"

import {ReturnComponentType} from "../../../../types/ReturnComponentType";
import {DialogsItem} from "./DialogItem";
import {Dialog} from "./Dialog";
import {ReduxAddMessageForm} from "./AddMessageForm";
import {DialogPropsType} from "../types";
import {FormMessagesType} from "./types";

export const Dialogs:React.FC<DialogPropsType> = ({messagesPage, addMessage}): ReturnComponentType => {

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

    const addNewMessage = (values: FormMessagesType):void => {
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