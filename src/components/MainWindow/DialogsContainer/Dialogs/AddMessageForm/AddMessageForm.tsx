import React, { FC, SyntheticEvent } from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { FormMessagesType } from '../types';

import style from './AddMessageForm.module.scss';

import { Textarea } from 'common';
import { maxLengthCreator, required } from 'utils';

const maxLength = maxLengthCreator(30);

const AddMessageForm: FC<InjectedFormProps<FormMessagesType>> = ({
  handleSubmit,
  reset,
}) => {
  const onSubmit = (values: SyntheticEvent<any, Event>): void => {
    handleSubmit(values);
    reset();
  };

  return (
    <form className={style.addMessage} onSubmit={onSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessageText"
          placeholder="Write your message ✉"
          validate={[required, maxLength]}
        />
      </div>
      <div className={style.form__btn}>
        <button type="submit">Add message</button>
      </div>
    </form>
  );
};

export const ReduxAddMessageForm = reduxForm<FormMessagesType>({
  form: 'dialogAddMessageForm',
})(AddMessageForm);
