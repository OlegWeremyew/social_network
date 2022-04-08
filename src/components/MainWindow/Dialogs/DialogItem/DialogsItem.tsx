import React from 'react';
import c from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";
import {UserType} from "../../../../redux/messagesReducer";

const DialogsItem = ({id, img, name}: UserType) => {

    const path = `/messages/"${id}`

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