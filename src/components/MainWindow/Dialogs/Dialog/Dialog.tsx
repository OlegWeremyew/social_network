import React from 'react';
import style from "./Dialog.module.css"
import {useDispatch} from "react-redux";

import {MessageActions, MessageType} from "../../../../redux/messagesReducer";

const Dialog:React.FC<MessageType> = ({message, id}) => {

    const dispatch = useDispatch()

    const deletePostHandler = (id: number) => {
        dispatch(MessageActions.deleteMessage(id))
    }

    return (
        <div  className={style.message}>
            <div className={style.message__item}>{message}</div>
            <div
                onClick={() => deletePostHandler(id)}
                className={style.delete__btn}
            >
                ❌
            </div>
        </div>

    )
}

export default Dialog