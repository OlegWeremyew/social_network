import React, { SyntheticEvent } from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Textarea } from '../../../../../../../../common';
import { ReturnComponentType } from '../../../../../../../../types/ReturnComponentType';
import { maxLengthCreator, required } from '../../../../../../../../utils';
import s from '../../../../../../../Login/Login.module.scss';
import { AddNewPostFormType } from '../types';

const maxLength = maxLengthCreator(10);

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = ({
  handleSubmit,
  reset,
}): ReturnComponentType => {
  const onSubmit = (values: SyntheticEvent<any, Event>): void => {
    handleSubmit(values);
    reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <Field
          component={Textarea}
          name="AddNewPost"
          placeholder="Write your message ✉"
          validate={[required, maxLength]}
        />
      </div>
      <div className={s.form__btn}>
        <button type="submit">Add post</button>
      </div>
    </form>
  );
};

export const ReduxAddNewPostForm = reduxForm<AddNewPostFormType>({
  form: 'ProfileAddNewPostForm',
})(AddNewPostForm);
