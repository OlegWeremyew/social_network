import React from 'react';
import c from "./Messages.module.css"
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";

export type DialogItemType = {
    name: string
    id: number
};
export type MessageIype = {
    message: string
    id: number
};

let users = [
    {name: "Oleg", id: 1},
    {name: "Diana", id: 2},
    {name: "Fat cat", id: 2},
    {name: "Dimka", id: 4},
    {name: "Homka", id: 5},
    {name: "Belka", id: 6},
]
let messages = [
    {message: "Hi", id: 1},
    {message: "Ho", id: 2},
    {message: "He", id: 3},
    {message: "Hu", id: 4},
    {message: "Hio", id: 5},
    {message: "Hia", id: 6},
]

const Messages = () => {

    let dialogsItem = users.map(u => <DialogsItem name={u.name} id={u.id}/>)
    let message = messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItem}>
                {dialogsItem}
            </div>
            <div className={c.messages}>
                {message}
            </div>
        </div>
    );
}

export default Messages;