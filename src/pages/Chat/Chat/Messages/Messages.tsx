import React, {useEffect, useState} from 'react';
import {Message} from "./Message/Message";
import {ChatMessageType} from "../../ChatPage";
import {ChatWSType} from "../Chat";

export const Messages: React.FC<ChatWSType | undefined> = ({wsChanel}) => {

    const [messages, setMessages] = useState<ChatMessageType[]>([])

    useEffect(() => {

        const messageHandler = (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        }

        wsChanel?.addEventListener('message', messageHandler)

        return () => {
            wsChanel?.removeEventListener("message", messageHandler)
        }

    }, [wsChanel])

    return (
        <div style={{height: "400px", overflowY: 'auto'}}>
            {messages.map((message, index) => <Message key={index} message={message}/>)}
        </div>
    )
}
