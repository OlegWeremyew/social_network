import React, {FC} from "react";
import c from "../../ProfileInfo.module.css";

export type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={c.contacts}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default Contact