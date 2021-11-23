import React from 'react';
import c from "./Messages.module.css"
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";
import {MessagesPageType} from "../../../redux/state";

type MessagesType = {
    state: MessagesPageType
}

const Messages = (props: MessagesType) => {

    let dialogsItem = props.state.users.map(u => <DialogsItem name={u.name} id={u.id} img={u.img}/>)
    let message = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItem}>
                {dialogsItem}
            </div>
            <div className={c.angel}></div>
            <div className={c.messages}>
                {message}
                <div>
                    <textarea rows={10} cols={35}/>
                </div>
                <div>
                    <button>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;