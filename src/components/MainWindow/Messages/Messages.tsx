import React, {useRef} from 'react';
import c from "./Messages.module.css"
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";
import {ActionTypes, MessagesPageType} from "../../../redux/store";
import {addMessageCreator, onMessagePostCreator} from "../../../redux/messagesReducer";

type MessagesType = {
    state: MessagesPageType
    dispatch: (action: ActionTypes) => void
}

const Messages = (props: MessagesType) => {

    let newMessageElement = useRef<HTMLTextAreaElement>(null);

    let addMessage = () => {
        let newMessage = newMessageElement.current?.value
        if (newMessage) props.dispatch(addMessageCreator(newMessage))
        if (newMessageElement.current) newMessageElement.current.value = ''
    }

    let onMessagePost = () => {
        let text = newMessageElement.current?.value
        text ? props.dispatch(onMessagePostCreator(text)) :
            props.dispatch(onMessagePostCreator(""));
    }

    let dialogsItem = props.state.users.map(u => <DialogsItem key={u.id} name={u.name} id={u.id} img={u.img}/>)
    let message = props.state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItem}>
                {dialogsItem}
            </div>
            <div className={c.messages}>
                {message}
                <div>
                    <textarea onChange={onMessagePost} value={props.state.newMessageText} ref={newMessageElement}
                              rows={10} cols={44} placeholder={'Write your message'}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Messages;