import React from "react";
import style from './AddMessageForm.module.css'

import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {FormMessagesType} from "../Dialogs";

const maxLength = maxLengthCreator(30)

const AddMessageForm: React.FC<InjectedFormProps<FormMessagesType>> = (props) => {
    return (
        <form  className={style.addMessage} onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={"newMessageText"}
                    placeholder={"Write your message"}
                    validate={[required, maxLength]}
                />
            </div>
            <div className={style.form__btn}>
                <button>
                    Add message
                </button>
            </div>
        </form>
    )
}

export const ReduxAddMessageForm = reduxForm<FormMessagesType>({form: "dialogAddMessageForm"})(AddMessageForm)