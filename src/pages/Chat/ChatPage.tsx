import React from 'react';
import {Chat} from "./Chat/Chat";



const ChatPage: React.FC = () => {
    return (
        <div>
            <Chat />
        </div>
    )
}

export default ChatPage

export type ChatMessageType = {
    message: string,
    photo: string
    userId: number,
    userName: string
}

