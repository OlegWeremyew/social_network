import React, {FC} from "react";
import style from "./Contact.module.scss";

const Contact: FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={style.formBlock}>
            <b>
                <a href={contactValue ? contactValue : ''}> {contactTitle}</a>:
            </b>
            {
                contactValue ?
                    <span>{contactValue}</span>
                    : <span>"Information is not provided"</span>
            }
        </div>
    )
}

export default Contact

//types
export type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}