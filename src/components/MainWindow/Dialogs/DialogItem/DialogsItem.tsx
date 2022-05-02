import React from 'react';
import style from "./DialogsItem.module.css";
import {UserType} from "../../../../redux/messagesReducer";
import {ReturnComponentType} from "../../../../types/ReturnComponentType";

const DialogsItem: React.FC<UserType> = ({img, name}): ReturnComponentType => {

    return (
        <div className={style.dialog}>
            <div>
                <img src={img} alt="dialogs item"/>
            </div>
            <div className={style.dialog__name}>
                {name}
            </div>
        </div>
    )
}

export default DialogsItem