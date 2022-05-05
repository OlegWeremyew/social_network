import React, {FC} from "react";
import style from "./Contact.module.scss";
import {ReturnComponentType} from "../../../../../../../types/ReturnComponentType";
import {EMPTY_STRING} from "../../../../../../../constants";
import {ContactsPropsType} from "./types";

export const Contact: FC<ContactsPropsType> = ({contactTitle, contactValue}): ReturnComponentType => {
    return (
        <div className={style.formBlock}>
            <b>
                <a href={contactValue ? contactValue : EMPTY_STRING}> {contactTitle}</a>:
            </b>
            {
                contactValue ?
                    <span>{contactValue}</span>
                    : <span>"Information is not provided"</span>
            }
        </div>
    )
}
