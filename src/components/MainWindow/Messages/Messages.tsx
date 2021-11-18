import React from 'react';
import c from "./Messages.module.css"
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: number
};
type MessageIype = {
    message: string
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

const Message = (props: MessageIype) => {
    return (
        <div className={c.message}>{props.message}</div>
    );
};

const Messages = () => {

    let users = [
        {name: "Oleg", id: 1},
        {name: "Diana", id: 2},
        {name: "Fat cat", id: 2},
        {name: "Dimka", id: 4},
        {name: "Homka", id: 5},
        {name: "Belka", id: 6},
    ]
    let messages = [
        {message: "Hi",  id: 1},
        {message: "Ho",  id: 2},
        {message: "He",  id: 3},
        {message: "Hu",  id: 4},
        {message: "Hio",  id: 5},
        {message: "Hia",  id: 6},
    ]

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItem}>
                <DialogItem name={users[0].name} id={users[0].id}/>
            </div>
            <div className={c.messages}>
                <Message message={messages[0].message} id={messages[0].id} />

            </div>
        </div>
    );
}

export default Messages;