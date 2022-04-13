import React from 'react';
import style from './Message.module.css'
import {ChatMessageType} from "../../../../../redux/chatReducer";

export const Message: React.FC<MessageType> = React.memo(({message}) => {

        return (
            <>
                <div className={style.message}>
                    <div className={style.message__item}>
                        <img className={style.message__img} src={message.photo} alt="avatar"
                             title={`avatar ${message.userName}`}/>
                        <div className={style.message__userName}>
                            {message.userName}
                        </div>
                        <br/>
                    </div>
                    <div className={style.message__text}>
                        {message.message}
                    </div>
                </div>
                <hr/>
            </>
        )
    }
)

type MessageType = {
    message: ChatMessageType
}