import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input, LoginFormValuesKeysType} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import style from "../../common/FormsControls/FormsControls.module.css"
import {Navigate} from "react-router-dom";
import {Nullable} from "../../types/Nullable";

export const Login = ({isAuth, login, captchaUrl}: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm
                onSubmit={onSubmit}
                captchaUrl={captchaUrl}
            />
        </div>
    )
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = ({
                                                                                                         handleSubmit,
                                                                                                         error,
                                                                                                         captchaUrl
                                                                                                     }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesKeysType>("Email", "email", [required], Input, {type: "text"})}
            {createField<LoginFormValuesKeysType>("Password", "password", [required], Input, {type: "password"})}
            {createField<LoginFormValuesKeysType>(null, "rememberMe", [], Input, {type: "checkbox"}, "Remember me")}

            {captchaUrl && <img src={captchaUrl} alt='captchaUrl'/>}
            {error && <div className={style.formSummaryError}>{error}</div>}

            {captchaUrl && createField<LoginFormValuesKeysType>('Symbols from image', 'captcha', [required], Input, {type: "text"})}
            {captchaUrl && <button type={'submit'}>Get Started</button>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, LoginFormOwnProps>({form: "Login"})(LoginForm)


//Types==============================================


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
    checkbox: boolean
}

type LoginFormOwnProps = {
    captchaUrl: Nullable<string>
}

type LoginPropsType = {
    isAuth?: boolean
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    captchaUrl: Nullable<string>
}

