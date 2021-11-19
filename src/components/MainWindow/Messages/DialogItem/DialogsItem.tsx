import React from 'react';
import c from "./DialogsItem.module.css"
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    name: string
    id: number
};

const DialogsItem = (props: DialogItemType) => {

    let path = "/messages/" + props.id;

    return (
        <div className={c.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogsItem;