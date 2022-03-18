import React from 'react';
import c from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";
import {UserType} from "../../../../redux/messagesReducer";

const DialogsItem = (props: UserType) => {

    const path = "/messages/" + props.id;

    return (
        <div className={c.dialog}>
            <div>
                <img src={props.img} alt="dialogs item"/>
            </div>
            <div>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogsItem;