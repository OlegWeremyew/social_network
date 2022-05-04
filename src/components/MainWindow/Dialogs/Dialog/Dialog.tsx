import React from 'react';
import style from "./Dialog.module.scss"
import {useDispatch} from "react-redux";

import {ReturnComponentType} from "../../../../types/ReturnComponentType";
import {MessageActions} from "../../../../redux/messagesReducer";
import {MessageType} from "../../../../redux/messagesReducer/types";

const Dialog: React.FC<MessageType> = ({message, id}): ReturnComponentType => {

    const dispatch = useDispatch()

    const deletePostHandler = (id: number): void => {
        dispatch(MessageActions.deleteMessage(id))
    }

    return (
        <div className={style.message}>
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