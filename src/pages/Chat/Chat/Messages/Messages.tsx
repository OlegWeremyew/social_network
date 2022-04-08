import React, {useEffect, useState} from 'react';
import {Message} from "./Message/Message";
import {ChatMessageType} from "../../ChatPage";
import {wsChanel} from "../../../../utils/wsChanel/wsChanel";

export const Messages: React.FC = () => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {
        wsChanel.addEventListener('message', (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [])

    return (
        <div style={{height: "400px", overflowY: 'auto'}}>
            {messages.map((message, index) => <Message key={index} message={message}/>)}
        </div>
    )
}
