import React, {FC} from "react";
import {ProfileType} from "../../../../../../redux/profileReducer";
import {Preloader} from "../../../../../../common/Preloader/Preloader";
import {createField, Input, Textarea} from "../../../../../../common/FormsControls/FormsControls";
import {InjectedFormProps, reduxForm} from "redux-form";

const ProfileDataForm: FC<InjectedFormProps<ProfileType, ProfileDataFormPropsType> & ProfileDataFormPropsType> = ({
                                                                                                                      profile,
                                                                                                                      handleSubmit,
                                                                                                                      error
                                                                                                                  }) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
                {error && <div>{error}</div>}
            </div>
            <div>
                <b>Full name</b>:
                {createField("Full name", "fullname", [], Input, {type: "text"}, "")}
            </div>
            <div>
                <b>Looking for a job</b>:
                {createField("", "lookingForAJob", [], Input, {type: "checkbox"}, "")}
            </div>
            <div>
                <b>My professional skills</b>:
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea, {type: "textarea"}, "")}
            </div>
            <div>
                <b>About me</b>:
                {createField("About me", "aboutMe", [], Textarea, {type: "textarea"}, "")}
            </div>
            <div>
                <b>Contacts</b>: {
                Object
                    .keys(profile.contacts)
                    .map(key => {
                        return (
                            <div key={key}>
                                <b>{key} :{createField(key, `contacts.${key}`, [], Input, {type: "text"}, "")}</b>
                            </div>
                        )
                    })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormPropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm

//types======
export type ProfileDataFormPropsType = {
    profile: ProfileType
}