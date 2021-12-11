import React, {useRef} from 'react';
import c from "./Messages.module.css"
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";
import {ADD_MESSAGE, MessagesPageType, UPDATE_NEW_MESSAGE_TEXT} from "../../../redux/state";

type MessagesType = {
    state: MessagesPageType
    dispatch: (action: any) => void
}

const Messages = (props: MessagesType) => {

    let newMessageElement = useRef<HTMLTextAreaElement>(null);

    let addMessage = () => {
        let text = newMessageElement.current?.value
        if (text) props.dispatch({type: ADD_MESSAGE})
        if (newMessageElement.current) newMessageElement.current.value = ''
    }

    let onMessagePost = () => {
        let text = newMessageElement.current?.value
        const action = {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text};
        text ? props.dispatch(action) : props.dispatch({type:''});
    }

    let dialogsItem = props.state.users.map(u => <DialogsItem name={u.name} id={u.id} img={u.img}/>)
    let message = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

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