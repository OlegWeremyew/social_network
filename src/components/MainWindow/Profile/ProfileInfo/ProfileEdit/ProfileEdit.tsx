import React from 'react';
import style from "../ProfileInfo.module.css";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";
import {ProfileType} from "../../../../../redux/profileReducer";

const ProfileEdit: React.FC<ProfileEditPropsType> = ({
                                                         editMode,
                                                         profile,
                                                         onSubmit,
                                                         isOwner,
                                                         setEditModeHandler,
                                                         disableViewMode
                                                     }) => {
    return (
        <>
            <div className={style.view__btn} onClick={disableViewMode}>
                <button>Hide contacts</button>
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