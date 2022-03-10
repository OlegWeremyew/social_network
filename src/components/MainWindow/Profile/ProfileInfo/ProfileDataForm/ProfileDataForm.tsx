import React from "react";
import Contact from "../ProfileData/Contact/Contact";
import {ContactsType, ProfileType} from "../../../../../redux/profileReducer";
import {Preloader} from "../../../../../common/Preloader/Preloader";
import {createField, Input} from "../../../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

export type ProfileDataFormPropsType = {
    profile: ProfileType
}

const ProfileDataForm = ({profile}: ProfileDataFormPropsType) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <form>
                <div><button onClick={()=>{}}>Save</button></div>
            <div>
                <b>Full name</b>: {createField("Full name", "fullname", [], Input, {type: "text"}, "")}
            </div>
            <div>
                <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"}, "")}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {
                Object
                    .keys(profile.contacts)
                    .map(key => {
                        return <Contact
                            key={key}
                            contactTitle={key}
                            contactValue={profile.contacts[key as keyof ContactsType]}
                        />
                    })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, ProfileDataFormPropsType>({form:'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm