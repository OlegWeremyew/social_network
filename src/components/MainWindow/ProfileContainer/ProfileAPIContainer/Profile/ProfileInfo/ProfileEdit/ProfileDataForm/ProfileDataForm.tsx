import React, { FC } from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { createField, Input, Preloader } from '../../../../../../../../common';
import { EMPTY_STRING } from '../../../../../../../../constants';
import { ProfileType } from '../../../../../../../../redux/profileReducer/types';
import { ReturnComponentType } from '../../../../../../../../types/ReturnComponentType';

import style from './ProfileDataForm.module.scss';
import { ProfileDataFormPropsType } from './types';

export const ProfileDataForm: FC<
  InjectedFormProps<ProfileType, ProfileDataFormPropsType> & ProfileDataFormPropsType
> = ({ profile, handleSubmit, error }): ReturnComponentType => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <form className={style.formContainer} onSubmit={handleSubmit}>
      <span className={style.contacts__Title}>Little about me:</span>

      <div className={style.form_edit}>
        <div className={style.formBlock}>
          <span>Full name:</span>
          {createField(
            'Full name',
            'fullname',
            [],
            Input,
            { type: 'text' },
            EMPTY_STRING,
          )}
        </div>
        <div className={style.formBlock__check}>
          <span>Looking for a job:</span>
          {createField(
            '',
            'lookingForAJob',
            [],
            Input,
            { type: 'checkbox' },
            EMPTY_STRING,
          )}
        </div>
        <div className={style.formBlock}>
          <span>My professional skills:</span>
          {createField(
            'My professional skills',
            'lookingForAJobDescription',
            [],
            Input,
            { type: 'textarea' },
            EMPTY_STRING,
          )}
        </div>
        <div className={style.formBlock}>
          <span>About me:</span>
          {createField(
            'About me',
            'aboutMe',
            [],
            Input,
            { type: 'textarea' },
            EMPTY_STRING,
          )}
        </div>

        <span className={style.contacts__Title}>My contacts:</span>
        <div className={style.contactsBlock}>
          {Object.keys(profile.contacts).map(key => (
            <div className={style.contact__item} key={key}>
              <span>
                {key}:
                {createField(
                  key,
                  `contacts.${key}`,
                  [],
                  Input,
                  { type: 'text' },
                  EMPTY_STRING,
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={style.saveEdit__btn}>
        <button type="submit">Save</button>
        {error && <div>{error}</div>}
      </div>
    </form>
  );
};

export const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormPropsType>({
  form: 'edit-profile',
})(ProfileDataForm);
