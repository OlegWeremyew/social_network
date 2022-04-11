import React from 'react';
import {ChatMessageType} from "../../../../../redux/chatReducer";

export const Message: React.FC<MessageType> = React.memo(({message}) => {
        return (
            <div>
                <img style={{width: "30px"}} src={message.photo} alt="avatar"/> <b>{message.userName}</b> <br/>
                {message.message}
                <hr/>
            </div>
        )
    }
)

type MessageType = {
    message: ChatMessageType
}