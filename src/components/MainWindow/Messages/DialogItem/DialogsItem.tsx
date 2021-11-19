import React from 'react';
import c from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";
import {UserType} from "../../../../redux/state";

const DialogsItem = (props: UserType) => {

    let path = "/messages/" + props.id;

    return (
        <div className={c.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogsItem;