import React from "react";
import {WrappedFieldProps} from "redux-form";
import styles from "../FormsControls.module.scss";
import {FormControl} from "../FormsControls";

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea className={styles.textarea} {...input} {...restProps}/>
        </FormControl>
    )
}