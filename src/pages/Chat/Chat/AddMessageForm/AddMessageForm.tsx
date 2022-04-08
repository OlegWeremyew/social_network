import React, {useState} from 'react';
import {wsChanel} from "../../../../utils/wsChanel/wsChanel";

export const AddMessageForm: React.FC = () => {

    const [message, setMessage] = useState<string>("")

    const sendMessage = () => {
        if (!message) return
        wsChanel.send(message)
        setMessage("")
    }

    const addMessageText = (e: string) => {
        setMessage(e)
    }

    return (
        <div>
            <textarea
                placeholder={"write your message"}
                value={message}
                onChange={(e) => addMessageText(e.currentTarget.value)}/>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}
