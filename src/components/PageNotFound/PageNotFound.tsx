import React from 'react';
import style from './PageNotFound.module.css'

const PageNotFound = () => {
    return (
        <div className={style.notFound__page}>
            <h1 className={style.style}>
                404. Page not found
            </h1>
        </div>
    )
}

export default PageNotFound
