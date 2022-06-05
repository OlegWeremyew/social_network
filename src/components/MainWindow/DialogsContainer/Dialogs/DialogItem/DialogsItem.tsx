import React from 'react';
import style from "./DialogsItem.module.scss";
import {ReturnComponentType} from "../../../../../types/ReturnComponentType";
import {UserType} from "../../../../../redux/messagesReducer/types";

export const DialogsItem: React.FC<UserType> = ({img, name}): ReturnComponentType => {

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