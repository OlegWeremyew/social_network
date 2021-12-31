import React from 'react';
import c from "./Message.module.css"
import {MessageType} from "../../../../redux/messagesReducer";

const Message = (props: MessageType) => {

    return (
        <div className={c.message}>{props.message}</div>
    );
};

export default Message;