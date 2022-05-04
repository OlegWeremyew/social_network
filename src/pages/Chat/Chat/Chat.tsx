import React, {useEffect} from 'react';
import {Messages} from "./Messages/Messages";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";
import style from './Chat.module.scss'

import {useDispatch, useSelector} from "react-redux";
import {ReadyStatusType} from "../../../Api/chatApi/types";
import {ReturnComponentType} from "../../../types/ReturnComponentType";
import {getChatStatusSelector} from "../../../selectors";
import {startMessagesListening, stopMessagesListening} from "../../../redux/chatReducer";

export const Chat: React.FC = (): ReturnComponentType => {

    const dispatch = useDispatch()

    const status: ReadyStatusType = useSelector(getChatStatusSelector)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [dispatch])

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

