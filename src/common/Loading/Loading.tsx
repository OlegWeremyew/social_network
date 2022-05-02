import React from 'react';
import styles from './Loading.module.scss';
import {ReturnComponentType} from "../../types/ReturnComponentType";

export const Loading = (): ReturnComponentType => {

    return (
        <div className={styles.container}>
            <div className={styles.loader_three}>

            </div>
        </div>
    )
}