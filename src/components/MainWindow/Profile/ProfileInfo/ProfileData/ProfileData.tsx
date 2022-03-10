import {Preloader} from "../../../../../common/Preloader/Preloader";
import {ContactsType, ProfileType} from "../../../../../redux/profileReducer";
import React from "react";
import Contact from "./Contact/Contact";

export type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode?: () => void
}

const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataPropsType) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <>
            <div>
                {
                    isOwner &&
                    <div>
                        <button onClick={goToEditMode}>Edit</button>
                    </div>
                }
                <div>
                    <b>Full name</b>: {profile.fullName}
                </div>
                <div>
                    <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : 'no'}
                </div>
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}</div>
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
            </div>
        </>
    )
}

export default ProfileData