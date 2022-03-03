import React from 'react';
import c from "./ProfileInfo.module.css"
import avatarDefault from '../../../../assets/images/avatar_for_profile.jpg'
import {ProfileType} from "../../../../redux/profileReducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: any) => void
}

const ProfileInfo = ({profile, status, updateUserStatus, savePhoto, isOwner}: ProfileInfoPropsType) => {

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={c.profile}>
            <div className={c.avatarBlock}>
                <div className={c.avatar}>
                    <img
                        className={c.mainPhoto}
                        alt='ava'
                        src={profile && profile.photos.large !== null ? profile.photos.large : avatarDefault}/>
                    {isOwner && <input type={"file"} onChange={(e) => onMainPhotoSelected(e)}/>}
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