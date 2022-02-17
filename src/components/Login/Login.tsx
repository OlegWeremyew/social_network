import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import style from "../../common/FormsControls/FormsControls.module.css"
import {Navigate} from "react-router-dom";

export const Login = ({isAuth, login, ...restProps}: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit,error}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createField("Email", "email", [required], Input, {type: "text"}, "")}
                {createField("Password", "password", [required], Input, {type: "password"}, "")}
                {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "Remember me")}
            {
                error &&
                <div className={style.formSummaryError}>{error}</div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm<FormDataType>({form: "Login"})(LoginForm)


//Types==============================================

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginPropsType = {
    isAuth?: boolean
    login: (email: string, password: string, rememberMe: boolean) => void
}

