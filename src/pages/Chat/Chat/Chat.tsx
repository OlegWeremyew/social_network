import React, {useEffect} from 'react';
import {Messages} from "./Messages/Messages";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";
import {startMessagesListening, stopMessagesListening} from "../../../redux/chatReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {ReadyStatusType} from "../../../Api/chatApi";

export const Chat: React.FC = () => {

    const dispatch = useDispatch()

    const status = useSelector<AppStateType, ReadyStatusType>(state => state.chat.status)

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
            <>
                <Messages/>
                <AddMessageForm/>
            </>
        </>
    )
}

