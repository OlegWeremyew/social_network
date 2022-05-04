import React from 'react';
import style from "../ProfileInfo.module.scss";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";
import {ReturnComponentType} from "../../../../../types/ReturnComponentType";
import {ProfileType} from "../../../../../redux/profileReducer/types";

const ProfileEdit: React.FC<ProfileEditPropsType> = ({
                                                         editMode,
                                                         profile,
                                                         onSubmit,
                                                         isOwner,
                                                         setEditModeHandler,
                                                         disableViewMode
                                                     }): ReturnComponentType => {
    return (
        <>
            <div className={style.view__btn} onClick={disableViewMode}>
                <button type="button">Hide contacts</button>
            </div>
            {
                editMode
                    ? (
                        <>
                            <ProfileDataForm
                                initialValues={profile}
                                profile={profile}
                                onSubmit={onSubmit}
                            />
                        </>
                    ) : (
                        <ProfileData
                            profile={profile}
                            isOwner={isOwner}
                            goToEditMode={setEditModeHandler}
                        />
                    )
            }
        </>
    )
}

export default ProfileEdit

//types
type ProfileEditPropsType = {
    editMode: boolean
    profile: ProfileType
    onSubmit: any
    isOwner: boolean
    setEditModeHandler: () => void
    disableViewMode: () => void
}