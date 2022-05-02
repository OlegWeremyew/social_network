import React from 'react';
import style from './Message.module.css'
import {ChatMessageType} from "../../../../../redux/chatReducer";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../../../enums";

export const Message: React.FC<MessageType> = React.memo(({message}) => {

        return (
            <>
                <div className={style.message}>
                    <div className={style.message__item}>
                        <NavLink to={`${PATH.PROFILE}/${message.userId}`}>
                            <img
                                className={style.message__img}
                                src={message.photo}
                                alt="avatar"
                                title={`avatar ${message.userName}`}
                            />
                        </NavLink>
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