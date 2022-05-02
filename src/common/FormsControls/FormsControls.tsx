import React, {ComponentType} from 'react';
import styles from './FormsControls.module.scss'

import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {Validator} from "redux-form/lib/Field";
import {Nullable} from "../../types/Nullable";
import {EMPTY_STRING} from "../../constants";
import {ReturnComponentType} from "../../types/ReturnComponentType";

const FormControl: React.FC<FormControlPropsParamsType> = ({meta: {touched, error}, children}): ReturnComponentType => {

    const hasError = touched && error
    const styleError = hasError ? styles.error : EMPTY_STRING

    return (
        <div className={styles.FormControl + " " + styleError}>
            <div>
                {children}
            </div>
            <div>
                {
                    hasError
                    && <span>{error}</span>
                }
            </div>
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea className={styles.textarea} {...input} {...restProps}/>
        </FormControl>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <input  className={styles.input} {...input} {...restProps}/>
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