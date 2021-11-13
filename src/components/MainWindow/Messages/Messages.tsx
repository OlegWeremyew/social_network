import React from 'react';
import c from "./Messages.module.css"
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
};

const DialogItem = (props: DialogItemType) => {
    let path = "/messages/" + props.id;
    return (
        <div className={c.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

type MessageIype = {
    message: string

};

const Message = (props: MessageIype) => {
    return (
        <div className={c.message}>{props.message}</div>
    );
};

const Messages = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItem}>
                <DialogItem name="Oleg" id={1}/>
                <DialogItem name="Diana" id={2}/>
                <DialogItem name="Fat cat" id={3}/>
                <DialogItem name="Dimka" id={4}/>
                <DialogItem name="Homka" id={5}/>
                <DialogItem name="Belka" id={6}/>
            </div>
            <div className={c.messages}>
                <Message message="Hi"/>
                <Message message="Ho"/>
                <Message message="He"/>
            </div>
        </div>
    );
}

export default Messages;