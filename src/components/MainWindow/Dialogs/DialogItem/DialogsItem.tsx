import React from 'react';
import c from "./DialogsItem.module.css";
import {UserType} from "../../../../redux/messagesReducer";

const DialogsItem = ({id, img, name}: UserType) => {

    return (
        <div className={c.dialog}>
            <div>
                <img src={img} alt="dialogs item"/>
            </div>
            <div className={c.dialog__name}>
               {name}
            </div>
        </div>
    )
}

export default DialogsItem