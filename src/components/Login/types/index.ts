import {Nullable} from "../../../types/Nullable";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
    checkbox: boolean
}

export type LoginFormOwnProps = {
    captchaUrl: Nullable<string>
}