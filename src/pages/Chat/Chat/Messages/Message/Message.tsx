import React from 'react';
import {ChatMessageType} from "../../../ChatPage";

export const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {

    return (
        <div>
            <img style={{width: "30px"}} src={message.photo} alt="avatar"/> <b>{message.userName}</b> <br/>
            {message.message}
            <hr/>
        </div>
    )
}
