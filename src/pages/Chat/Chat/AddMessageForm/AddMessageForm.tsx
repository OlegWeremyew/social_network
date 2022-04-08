import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {sendMessage} from "../../../../redux/chatReducer";

export const AddMessageForm: React.FC = () => {

    const dispatch = useDispatch()

    const [message, setMessage] = useState<string>("")
    //const [readyStatus, setReadyStatus] = useState<ReadyStatusType>('pending')

    const sendMessageHandler = () => {
        if (!message.trim()) return
        dispatch(sendMessage(message))
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
                onClick={sendMessageHandler}
                disabled={false}
            >
                Send
            </button>
        </div>
    )
}

//types
type ReadyStatusType = 'pending' | 'ready'
