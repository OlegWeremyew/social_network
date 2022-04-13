import React from 'react';
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";
import {ProfileType} from "../../../../../redux/profileReducer";

const ProfileEdit = ({editMode, profile, onSubmit, isOwner, setEditModeHandler}: ProfileEditPropsType) => {
    return (
        <>
            {
                editMode
                    ? (<>
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
}