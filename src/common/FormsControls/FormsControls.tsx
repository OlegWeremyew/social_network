import React, {ComponentType} from 'react';
import styles from './FormsControls.module.css'
import {Field, WrappedFieldProps} from "redux-form";

const FormControl = ({meta: {touched, error}, children}: any) => {

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

export const Textarea = (props: any) => {
    const {input, meta, child, element, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, element, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder: string | null, name: string, validators: any[], component: componentType, props: { type: string }, text: string) => {
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

type componentType = "input" | "select" | "textarea" | ComponentType<WrappedFieldProps> | undefined