import React, {FC} from "react";
import style from "../../../ProfileInfo.module.css";

const Contact: FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={style.contacts}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default Contact

//types
export type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}