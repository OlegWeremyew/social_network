import React from 'react';
import style from "./Profile.module.scss"

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../../redux/profileReducer";
import {ReturnComponentType} from "../../../types/ReturnComponentType";

const Profile: React.FC<ProfilePropsType> = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}): ReturnComponentType => {

    return (
        <section className={style.profile}>
            <ProfileInfo
                profile={profile}
                status={status}
                updateUserStatus={updateUserStatus}
                isOwner={isOwner}
                savePhoto={savePhoto}
                saveProfile={saveProfile}
            />
            {
                isOwner
                && <MyPostsContainer/>
            }
        </section>
    )
}

export default Profile

//Types
type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => Promise<any>
}