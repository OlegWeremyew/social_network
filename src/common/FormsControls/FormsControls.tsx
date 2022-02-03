import React from 'react';
import styles from './FormsControls.module.css'

const FormControl = ({input, meta, child, element, ...props}: any) => {

    const hasError = meta.touched && meta.error
    const styleError = hasError ? styles.error : ""

    return (
        <div className={styles.formControl + " " + styleError}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, child, element, ...restProps} = props
    return <FormControl {...props}><textarea  {...restProps}/></FormControl>
}

export const Input = (props: any) => {
    const {input, meta, child, element, ...restProps} = props
    return <FormControl {...props}><input  {...restProps}/></FormControl>
}