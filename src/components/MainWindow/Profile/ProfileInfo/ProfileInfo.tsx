import React from 'react';
import c from "./ProfileInfo.module.css"
import avatarDefault from '../../../../assets/images/avatar_for_profile.jpg'
import {ProfileType} from "../../../../redux/profileReducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileInfo = ({profile, status, updateUserStatus}: ProfileInfoPropsType) => {

    return (
        <div className={c.profile}>
            <div className={c.avatarBlock}>
                <div className={c.avatar}>
                    <img alt='ava'
                         src={profile && profile.photos.large !== null ? profile.photos.large : avatarDefault}/>
                </div>
                <ProfileStatus
                    status={status}
                    updateUserStatus={updateUserStatus}
                />
            </div>
        </div>
    );
}

export default ProfileInfo;