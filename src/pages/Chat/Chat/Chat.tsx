import React, {useEffect} from 'react';
import {Messages} from "./Messages/Messages";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";
import {startMessagesListening, stopMessagesListening} from "../../../redux/chatReducer";
import style from './Chat.module.scss'

import {useDispatch, useSelector} from "react-redux";
import {getChatStatusSelector} from "../../../selectors/chatSelectors";
import {ReadyStatusType} from "../../../Api/chatApi/types";

export const Chat: React.FC = () => {

    const dispatch = useDispatch()

    const status:ReadyStatusType = useSelector(getChatStatusSelector)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return (
        <>
            {
                status === 'error'
                && <div>Some error occurred. Please refresh this page</div>
            }
            <div className={style.chatBlock}>
                <Messages/>
                <AddMessageForm/>
            </div>
        </>
    )
}

