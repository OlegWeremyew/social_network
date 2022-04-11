import React, {ChangeEvent, useState} from 'react';
import style from "./ProfileInfo.module.css"

import avatarDefault from '../../../../assets/images/avatar_for_profile.jpg'
import {ProfileType} from "../../../../redux/profileReducer";
import {Preloader} from "../../../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import ProfileEdit from "./ProfileEdit/ProfileEdit";

const ProfileInfo = ({profile, status, updateUserStatus, savePhoto, isOwner, saveProfile}: ProfileInfoPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

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
        setEditMode(false)
    }

    const setEditModeHandler = () => {
        setEditMode(true)
    }

    return (
        <div className={style.profile}>
            <div className={style.avatarBlock}>
                <div className={style.avatar}>
                    <img
                        className={style.mainPhoto}
                        alt='main avatar'
                        src={
                            profile
                            && (profile.photos.large !== null)
                                ? profile.photos.large
                                : avatarDefault
                        }
                    />
                </div>
                <div  className={style.profile__inner}>
                    <ProfileStatus
                        status={status}
                        updateUserStatus={updateUserStatus}
                    />
                    <div className={style.addedPhoto__btn}>
                        {
                            isOwner
                            && <input
                                type={"file"}
                                onChange={(e) => onMainPhotoSelected(e)}
                            />
                        }
                    </div>
                </div>
            </div>
            <hr/>
            <ProfileEdit
                editMode={editMode}
                profile={profile}
                onSubmit={onSubmit}
                isOwner={isOwner}
                setEditModeHandler={setEditModeHandler}
            />
        </div>
    )
}

export default ProfileInfo

//types
export type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => Promise<any>
}