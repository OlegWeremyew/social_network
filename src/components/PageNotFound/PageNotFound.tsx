import React from 'react';
import style from './PageNotFound.module.scss'
import {ReturnComponentType} from "../../types/ReturnComponentType";

const PageNotFound = (): ReturnComponentType => {
    return (
        <section className={style.notFound__page}>
            <h1 className={style.title}>
                404. Page not found
            </h1>
        </section>
    )
}

export default PageNotFound
