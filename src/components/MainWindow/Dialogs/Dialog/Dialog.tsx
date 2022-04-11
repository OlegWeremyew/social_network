import React from 'react';
import c from "./Dialog.module.css"
import {MessageType} from "../../../../redux/messagesReducer";

const Dialog = (props: MessageType) => {

    return (
        <div className={c.message}>{props.message}</div>
    )
}

export default Dialog;