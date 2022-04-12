import React from 'react';
import c from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";
import {UserType} from "../../../../redux/messagesReducer";
import {PATH} from "../../../../common/RouterPath/RouterPath";

const DialogsItem = ({id, img, name}: UserType) => {

    const path = `${PATH.DIALOGS}${id}`

    return (
        <div className={c.dialog}>
            <div>
                <img src={img} alt="dialogs item"/>
            </div>
            <div>
                <NavLink to={path}>{name}</NavLink>
            </div>
        </div>
    )
}

export default DialogsItem