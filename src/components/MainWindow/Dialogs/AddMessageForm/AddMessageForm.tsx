import React, {SyntheticEvent} from "react";
import style from './AddMessageForm.module.scss'

import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../../common/FormsControls/FormsControls";
import {FormMessagesType} from "../Dialogs";
import {ReturnComponentType} from "../../../../types/ReturnComponentType";
import {maxLengthCreator, required} from "../../../../utils";

const maxLength = maxLengthCreator(30)

const AddMessageForm: React.FC<InjectedFormProps<FormMessagesType>> = ({handleSubmit, reset}): ReturnComponentType => {

    const onSubmit = (values: SyntheticEvent<any, Event>) => {
        handleSubmit(values)
        reset()
    }

    return (
        <form className={style.addMessage} onSubmit={onSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={"newMessageText"}
                    placeholder={"Write your message ✉"}
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