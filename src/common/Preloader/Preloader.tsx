import React from 'react';
import preloader from "../../assets/images/preloader.gif";
import style from "./Preloader.module.css";

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} className={style.preloader} alt="preloader"/>
        </div>
    )
}
