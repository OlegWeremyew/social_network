import React, {ChangeEvent, useState} from 'react';
import c from "./ProfileInfo.module.css"
import avatarDefault from '../../../../assets/images/avatar_for_profile.jpg'
import {ProfileType} from "../../../../redux/profileReducer";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {Preloader} from "../../../../common/Preloader/Preloader";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";

export type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => Promise<any>
}

const ProfileInfo = ({profile, status, updateUserStatus, savePhoto, isOwner, saveProfile}: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = async (formData: ProfileType): Promise<any> => {
        await saveProfile(formData)
        setEditMode(false);
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
                {editMode
                    ? (<ProfileDataForm
                            initialValues={profile}
                            profile={profile}
                            onSubmit={onSubmit}
                        />
                    ) : (<ProfileData
                        profile={profile}
                        isOwner={isOwner}
                        goToEditMode={() => setEditMode(true)}
                    />)}
                <ProfileStatusWithHooks
                    status={status}
                    updateUserStatus={updateUserStatus}
                />
            </div>
        </div>
    );
}

export default ProfileInfo;