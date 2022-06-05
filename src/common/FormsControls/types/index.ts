import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import React, {ComponentType} from "react";

export type FormControlPropsParamsType = {
    meta: WrappedFieldMetaProps
    children: React.ReactNode
}

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

export type  LoginFormValuesKeysType = Extract<keyof LoginFormValuesType, string>

export type componentType = "input" | "select" | "textarea" | ComponentType<WrappedFieldProps> | undefined