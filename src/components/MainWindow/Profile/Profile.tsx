import React from 'react';
import c from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../../redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div className={c.profile}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;