import React, {ChangeEvent} from 'react';
import c from "./Messages.module.css"
import Message from "./Message/Message";
import DialogsItem from "./DialogItem/DialogsItem";
import {UsersPropsType} from "./MessagesContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormMessagesType = {
    newMessageText: string
}

export const Messages = (props: UsersPropsType) => {

    let dialogsItem = props.messagesPage.users
        .map(u => <DialogsItem key={u.id} name={u.name} id={u.id} img={u.img}/>)
    let message = props.messagesPage.messages
        .map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    const addMessage = (values: FormMessagesType) => {
        props.addMessage(values.newMessageText)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItem}>
                {dialogsItem}
            </div>
            <div className={c.messages}>
                {message}
            </div>
            <ReduxAddMessageForm onSubmit={addMessage}/>
        </div>
    );
}


const AddMessageForm: React.FC<InjectedFormProps<FormMessagesType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={"textarea"}
                    name={"newMessageText"}
                    placeholder={"Write your message"}
                />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const ReduxAddMessageForm = reduxForm<FormMessagesType>({form: "dialogAddMessageForm"})(AddMessageForm)