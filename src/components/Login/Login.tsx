import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { InjectedFormProps, reduxForm } from 'redux-form';

import s from './Login.module.scss';
import { FormDataType, LoginFormOwnProps } from './types';

import { createField, Input } from 'common';
import style from 'common/FormsControls/FormsControls.module.scss';
import { LoginFormValuesKeysType } from 'common/FormsControls/types';
import { PATH } from 'enums';
import { login } from 'redux/authReducer';
import { getAuthCaptchaUrlSelector, getAuthIsAuthSelector } from 'selectors';
import { Nullable } from 'types/Nullable';
import { ReturnComponentType } from 'types/ReturnComponentType';
import { required } from 'utils';

export const Login: FC = () => {
  const dispatch = useDispatch();

  const captchaUrl: Nullable<string> = useSelector(getAuthCaptchaUrlSelector);
  const isAuth: boolean = useSelector(getAuthIsAuthSelector);

  const onSubmit = (formData: FormDataType): void => {
    dispatch(
      login(formData.email, formData.password, formData.rememberMe, formData.captcha),
    );
  };

  if (isAuth) {
    return <Navigate to={PATH.PROFILE} />;
  }

  return (
    <section className={s.login__block}>
      <h1 className={s.login__title}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </section>
  );
};

const LoginForm: FC<
  InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps
> = ({ handleSubmit, error, captchaUrl }): ReturnComponentType => (
  <form onSubmit={handleSubmit}>
    <div className={s.input__form}>
      {createField<LoginFormValuesKeysType>('Email', 'email', [required], Input, {
        type: 'text',
      })}
    </div>
    <div className={s.input__form}>
      {createField<LoginFormValuesKeysType>('Password', 'password', [required], Input, {
        type: 'password',
      })}
    </div>
    <div className={s.checkbox__form}>
      {createField<LoginFormValuesKeysType>(
        null,
        'rememberMe',
        [],
        Input,
        { type: 'checkbox' },
        'Remember me',
      )}
    </div>

    {captchaUrl && <img src={captchaUrl} alt="captchaUrl" />}
    {error && <div className={style.formSummaryError}>{error}</div>}

    {captchaUrl &&
      createField<LoginFormValuesKeysType>(
        'Symbols from image',
        'captcha',
        [required],
        Input,
        { type: 'text' },
      )}
    {captchaUrl && <button type="submit">Get Started</button>}
    <div className={s.form__btn}>
      <button type="submit">Login</button>
    </div>
  </form>
);

const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({ form: 'Login' })(
  LoginForm,
);
