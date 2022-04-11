import React, {ComponentType} from 'react';
import styles from './FormsControls.module.css'

import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {Validator} from "redux-form/lib/Field";
import {Nullable} from "../../types/Nullable";

const FormControl: React.FC<FormControlPropsParamsType> = ({meta: {touched, error}, children}) => {

    const hasError = touched && error
    const styleError = hasError ? styles.error : ""

    return (
        <div className={styles.formControl + " " + styleError}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}

export function createField<T extends string>(placeholder: Nullable<string>, name: T, validators: Validator | Validator[], component: componentType, props: { type: string }, text?: string) {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                component={component}
                validate={validators}
                {...props}
            /> {text}
        </div>
    )
}

//types====

type FormControlPropsParamsType = {
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

type componentType = "input" | "select" | "textarea" | ComponentType<WrappedFieldProps> | undefined