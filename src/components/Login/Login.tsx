import React from 'react';
import style from "../../common/FormsControls/FormsControls.module.css"
import s from "./Login.module.css"

import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input, LoginFormValuesKeysType} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Navigate} from "react-router-dom";
import {Nullable} from "../../types/Nullable";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {login} from "../../redux/authReducer";


const Login: React.FC = () => {

    const dispatch = useDispatch()

    const captchaUrl = useSelector<AppStateType, Nullable<string>>(state => state.auth.captchaUrl)
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    const onSubmit = (formData: FormDataType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }


    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div className={s.login__block}>
            <h1 className={s.login__title}>Login</h1>
            <LoginReduxForm
                onSubmit={onSubmit}
                captchaUrl={captchaUrl}
            />
        </div>
    )
}
export default Login

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginFormOwnProps> & LoginFormOwnProps> = ({
                                                                                                         handleSubmit,
                                                                                                         error,
                                                                                                         captchaUrl
                                                                                                     }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.input__form}>
                {createField<LoginFormValuesKeysType>("Email", "email", [required], Input, {type: "text"})}
            </div>
            <div className={s.input__form}>
                {createField<LoginFormValuesKeysType>("Password", "password", [required], Input, {type: "password"})}
            </div>
            <div className={s.checkbox__form}>
                {createField<LoginFormValuesKeysType>(null, "rememberMe", [], Input, {type: "checkbox"}, "Remember me")}
            </div>

            {captchaUrl && <img src={captchaUrl} alt='captchaUrl'/>}
            {error && <div className={style.formSummaryError}>{error}</div>}

            {captchaUrl && createField<LoginFormValuesKeysType>('Symbols from image', 'captcha', [required], Input, {type: "text"})}
            {captchaUrl && <button type={'submit'}>Get Started</button>}
            <div className={s.form__btn}>
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