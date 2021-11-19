import React from 'react';
import c from "./Message.module.css"

export type MessageIype = {
    message: string
    id: number
};

const Message = (props: MessageIype) => {

    return (
        <div className={c.message}>{props.message}</div>
    );
};

export default Message;