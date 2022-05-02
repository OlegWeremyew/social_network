import React from 'react';
import {Chat} from "./Chat/Chat";
import style from './ChatPage.module.scss'
import {ReturnComponentType} from "../../types/ReturnComponentType";

const ChatPage: React.FC = (): ReturnComponentType => {
    return (
        <section className={style.chatPageBlock}>
            <div className={style.chatPage__title}>
                Common chat
            </div>
            <Chat/>
        </section>
    )
}

export default ChatPage

export type ChatMessageAPIType = {
    message: string,
    photo: string
    userId: number,
    userName: string
}

