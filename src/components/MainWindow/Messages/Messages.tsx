import React from 'react';
import c from "./Messages.module.css"
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";
import {MessagesPageType} from "../../../redux/state";

type MessagesType = {
    state: MessagesPageType
}

const Messages = (props: MessagesType) => {

    let dialogsItem = props.state.users.map(u => <DialogsItem name={u.name} id={u.id}/>)
    let message = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

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