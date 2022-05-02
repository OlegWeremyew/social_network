import React, {FC} from "react";
import style from './ProfileDataForm.module.scss'

import {ProfileType} from "../../../../../../redux/profileReducer";
import {Preloader} from "../../../../../../common/Preloader/Preloader";
import {createField, Input} from "../../../../../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ReturnComponentType} from "../../../../../../types/ReturnComponentType";
import {EMPTY_STRING} from "../../../../../../constants";


const ProfileDataForm: FC<InjectedFormProps<ProfileType, ProfileDataFormPropsType> & ProfileDataFormPropsType> = ({
                                                                                                                      profile,
                                                                                                                      handleSubmit,
                                                                                                                      error,

                                                                                                                  }): ReturnComponentType => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <form className={style.formContainer} onSubmit={handleSubmit}>
            <span className={style.contacts__Title}>Little about me:</span>

            <div className={style.form_edit}>
                <div className={style.formBlock}>
                    <span>Full name:</span>
                    {createField("Full name", "fullname", [], Input, {type: "text"}, EMPTY_STRING)}
                </div>
                <div className={style.formBlock__check}>
                    <span>Looking for a job:</span>
                    {createField("", "lookingForAJob", [], Input, {type: "checkbox"}, EMPTY_STRING)}
                </div>
                <div className={style.formBlock}>
                    <span>My professional skills:</span>
                    {createField("My professional skills", "lookingForAJobDescription", [], Input, {type: "textarea"}, EMPTY_STRING)}
                </div>
                <div className={style.formBlock}>
                    <span>About me:</span>
                    {createField("About me", "aboutMe", [], Input, {type: "textarea"}, EMPTY_STRING)}
                </div>

                <span className={style.contacts__Title}>My contacts:</span>
                <div className={style.contactsBlock}>
                    {
                        Object
                            .keys(profile.contacts)
                            .map(key => {
                                return (
                                    <div className={style.contact__item} key={key}>
                                        <span>{key}:{createField(key, `contacts.${key}`, [], Input, {type: "text"}, EMPTY_STRING)}</span>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
            <div className={style.saveEdit__btn}>
                <button>Save</button>
                {
                    error
                    && <div>{error}</div>
                }
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormPropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm

//types======
export type ProfileDataFormPropsType = {
    profile: ProfileType
    goToEditMode?: () => void
}