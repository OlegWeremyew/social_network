import React from 'react';
import c from "./Message.module.css"
import {MessageIype} from "../Messages";

const Message = (props: MessageIype) => {
    return (
        <div className={c.message}>{props.message}</div>
    );
};

export default Message;