import React from 'react';
import preloader from "../../assets/images/preloader.gif";
import c from "./Preloader.module.css";

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} className={c.preloader} alt="preloader"/>
        </div>
    );
};
;