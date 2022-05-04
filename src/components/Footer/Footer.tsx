import React from 'react';
import style from "./Footer.module.scss"

import phone from '../../assets/images/contacts/phone.svg'
import operatorMts from '../../assets/images/contacts/operator_mts.svg'
import mail from '../../assets/images/contacts/mail.svg'
import {ReturnComponentType} from "../../types/ReturnComponentType";

const Footer = (): ReturnComponentType => {
    return (
        <div className={style.footer}>

            <div className={style.copyright__text}>

                <div>
                    Copyright © 2022 Social network. All Rights Reserved
                </div>

                <div>
                    Made with <span className={style.copyright__header}>&#10084;</span> <span>by Oleg Veremyev</span>
                </div>

                <div className={style.phoneBlock}>
                    <div className={style.phone}>
                        <img src={operatorMts} alt="operator mts"/>
                        <a href="tel:+375298413953">
                            +375 (29) 841-39-53
                        </a>
                    </div>

                    <div className={style.phone}>
                        <img src={phone} alt="phone"/>
                        <a href="tel:+375173582979">
                            +375 (17) 358-29-79
                        </a>
                    </div>

                    <div className={style.phone}>
                        <img src={mail} alt="mail"/>
                        <a href="mailto:olegweremey1994@mail.ru">
                            <span>olegweremey1994@mail.ru</span>
                        </a>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer