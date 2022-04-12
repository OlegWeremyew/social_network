import React, {FC} from "react";
import style from "../../../ProfileInfo.module.css";

const Contact: FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={style.formBlock}>
            <b>{contactTitle} : </b> {contactValue ? <span>{contactValue}</span> : "Information is not provided"}
        </div>
    )
}

export default Contact

//types
export type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}