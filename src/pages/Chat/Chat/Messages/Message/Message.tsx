import React from 'react';
import style from './Message.module.css'
import {ChatMessageType} from "../../../../../redux/chatReducer";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../../../enums";
import {ReturnComponentType} from "../../../../../types/ReturnComponentType";

export const Message: React.FC<MessageType> = React.memo(({message}): ReturnComponentType => {

    const navLinkPath = `${PATH.PROFILE}/${message.userId}`

        return (
            <>
                <div className={style.message}>
                    <div className={style.message__item}>
                        <NavLink to={navLinkPath}>
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