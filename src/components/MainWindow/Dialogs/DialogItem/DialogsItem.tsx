import React from 'react';
import style from "./DialogsItem.module.css";
import {UserType} from "../../../../redux/messagesReducer";

const DialogsItem = ({img, name}: UserType) => {

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