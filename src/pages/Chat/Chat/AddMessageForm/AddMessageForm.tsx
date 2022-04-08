import React, {useEffect, useState} from 'react';
import {ChatWSType} from "../Chat";

export const AddMessageForm: React.FC<ChatWSType> = ({wsChanel}) => {

    const [message, setMessage] = useState<string>("")
    const [readyStatus, setReadyStatus] = useState<ReadyStatusType>('pending')

    useEffect(() => {

        const openHandler = () => {
            setReadyStatus('ready')
        }

        wsChanel?.addEventListener('open', openHandler)

        return () => {
            wsChanel?.addEventListener('open', openHandler)
        }

    }, [wsChanel])

    const sendMessage = () => {
        if (!message.trim()) return
        wsChanel?.send(message)
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
                onChange={(e) => addMessageText(e.currentTarget.value)}
            />
            <button
                onClick={sendMessage}
                disabled={wsChanel == null || readyStatus !== 'ready'}
            >Send
            </button>
        </div>
    )
}

//types
type ReadyStatusType = 'pending' | 'ready'
