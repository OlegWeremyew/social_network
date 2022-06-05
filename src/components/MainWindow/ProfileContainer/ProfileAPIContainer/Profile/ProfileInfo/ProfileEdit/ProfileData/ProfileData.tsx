import style from "./ProfileData.module.scss";

import React from "react";
import {ReturnComponentType} from "../../../../../../../../types/ReturnComponentType";
import {Preloader} from "../../../../../../../../common";
import {ContactsType} from "../../../../../../../../redux/profileReducer/types";
import {ProfileDataPropsType} from "./types";
import {Contact} from "./Contact";

export const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}): ReturnComponentType => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <>
            <div>
                <span className={style.contacts__Title}>Little about me:</span>
                <div className={style.formBlock}>
                    <div className={style.formBlock__title}>
                        Full name:
                    </div>
                    <div>
                        {profile.fullName}
                    </div>
                </div>
                <div className={style.formBlock}>
                    <div className={style.formBlock__title}>
                        Looking for a job:
                    </div>
                    <div>
                        {
                            profile.lookingForAJob
                                ? "I'm looking for a job"
                                : 'no, I\'m not looking for a job at the moment'
                        }
                    </div>
                </div>
                <div className={style.formBlock}>
                    <div className={style.formBlock__title}>
                        My professional skills:
                    </div>
                    <div>
                        {profile.lookingForAJobDescription}
                    </div>
                </div>
                <div className={style.formBlock}>
                    <div className={style.formBlock__title}>
                        About me:
                    </div>
                    <div>
                        {profile.aboutMe}
                    </div>
                </div>
                <div className={style.contacts__container}>
                    <span className={style.contacts__Title}>My contacts:</span>
                    <div className={style.contacts__text}>If you want to go to my web pages - click on the title below
                        <span> &#9759;</span>
                    </div>
                    <div className={style.contactsBlock}>
                        {
                            Object
                                .keys(profile.contacts)
                                .map(key => {
                                        return (
                                            <div className={style.contactsBlock__item} key={key}>
                                                <span className={style.icon}>&#10003; </span>
                                                <Contact
                                                    contactTitle={key}
                                                    contactValue={profile.contacts[key as keyof ContactsType]}
                                                />
                                            </div>
                                        )
                                    }
                                )
                        }
                    </div>
                </div>
                {
                    isOwner &&
                    <div className={style.activateEdit__btn} onClick={goToEditMode}>
                        <button type="button">Edit contacts</button>
                    </div>
                }
            </div>
        </>
    )
}
