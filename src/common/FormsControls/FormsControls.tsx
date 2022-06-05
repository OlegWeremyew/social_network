import React from 'react';
import styles from './FormsControls.module.scss'

import {EMPTY_STRING} from "../../constants";
import {ReturnComponentType} from "../../types/ReturnComponentType";
import {FormControlPropsParamsType} from "./types";

export const FormControl: React.FC<FormControlPropsParamsType> = ({meta: {touched, error}, children}): ReturnComponentType => {

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
