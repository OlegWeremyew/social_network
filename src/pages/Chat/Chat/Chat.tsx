import React, {useEffect} from 'react';
import {Messages} from "./Messages/Messages";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";
import {startMessagesListening, stopMessagesListening} from "../../../redux/chatReducer";
import {useDispatch} from "react-redux";

export const Chat: React.FC = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return (
        <>
            <Messages/>
            <AddMessageForm/>
        </>
    )
}

