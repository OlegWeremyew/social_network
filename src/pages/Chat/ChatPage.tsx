import React from 'react';
import {Chat} from "./Chat/Chat";
import style from './ChatPage.module.css'

const ChatPage: React.FC = () => {
    return (
        <div className={style.chatPageBlock}>
            <div  className={style.chatPage__title}>Common chat</div>
            <Chat/>
        </div>
    )
}

export default ChatPage

export type ChatMessageAPIType = {
    message: string,
    photo: string
    userId: number,
    userName: string
}

