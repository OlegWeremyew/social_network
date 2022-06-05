import React from "react";
import {WrappedFieldProps} from "redux-form";
import styles from "../FormsControls.module.scss";
import {FormControl} from "../FormsControls";

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <input  className={styles.input} {...input} {...restProps}/>
        </FormControl>
    )
}