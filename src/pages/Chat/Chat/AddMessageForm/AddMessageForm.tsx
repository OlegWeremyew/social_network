import React, {useState, KeyboardEvent} from 'react';
import style from './AddMessageForm.module.css'

import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../../../redux/chatReducer";
import {AppStateType} from "../../../../redux/reduxStore";
import {ReadyStatusType} from "../../../../Api/chatApi";

export const AddMessageForm: React.FC = () => {

    const dispatch = useDispatch()

    const [message, setMessage] = useState<string>("")

    const status = useSelector<AppStateType, ReadyStatusType>(state => state.chat.status)

    const sendMessageHandler = () => {
        if (!message.trim()) return
        dispatch(sendMessage(message))
        setMessage("")
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            dispatch(sendMessage(message))
            setMessage("")
        }
    }

    const addMessageText = (e: string) => {
        setMessage(e)
    }

    return (
        <div>
            <textarea
                className={style.textarea}
                placeholder={"write your message"}
                value={message}
                onChange={(e) => addMessageText(e.currentTarget.value)}
                onKeyPress={onKeyPressHandler}
            />
            <div className={style.form__btn} onClick={sendMessageHandler}>
                <button
                    disabled={status !== 'ready'}
                >
                    Send
                </button>
            </div>
        </div>
    )
}
