import React from 'react';
import style from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={style.footer}>
                <div className={style.copyright__text}>
                    <div>Copyright © 2022 Social network. All Rights Reserved</div>
                    <div>Made with <span className={style.copyright__header}>&#10084;</span> <span>by Oleg Veremyev</span>
                    </div>
            </div>
        </div>
    )
}

export default Footer