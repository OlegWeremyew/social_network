import React from 'react';
import style from './ChatPage.module.scss'
import {ReturnComponentType} from "../../types/ReturnComponentType";
import {Chat} from "./Chat";

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

