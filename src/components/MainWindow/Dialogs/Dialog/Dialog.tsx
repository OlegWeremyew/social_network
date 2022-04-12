import React from 'react';
import style from "./Dialog.module.css"
import {MessageType} from "../../../../redux/messagesReducer";

const Dialog = (props: MessageType) => {

    return (
        <div  className={style.message}>
            <div className={style.message__item}>{props.message}</div>
        </div>

    )
}

export default Dialog;