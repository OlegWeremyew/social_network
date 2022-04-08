import React from 'react';
import {Message} from "./Message/Message";
import {ChatMessageType} from "../../ChatPage";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/reduxStore";

export const Messages: React.FC = () => {

    const messages = useSelector<AppStateType, ChatMessageType[]>(state => state.chat.messages)

    return (
        <div style={{height: "400px", overflowY: 'auto'}}>
            {
                messages.map((message, index) => {
                    return (
                        <Message
                            key={index}
                            message={message}
                        />
                    )
                })
            }
        </div>
    )
}
