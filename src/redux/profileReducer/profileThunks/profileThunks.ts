import {ActionProfileTypes, ProfileType, ThunkProfileType} from "../types";
import {profileAPI} from "../../../Api";
import {ResultCodesEnum} from "../../../Api/enums";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {FIRST_ELEMENT_IN_ARRAY} from "../../../constants";
import {ProfileActions} from "../profileActions";

export const getUserProfile = (userId: string): ThunkProfileType => async (dispatch) => {
    const getProfileData = await profileAPI.getProfile(userId)
    dispatch(ProfileActions.setUserProfile(getProfileData))
}

export const getUserStatus = (userId: string): ThunkProfileType => async (dispatch) => {
    const getStatusData = await profileAPI.getStatus(userId)
    dispatch(ProfileActions.setStatus(getStatusData))
}

export const updateUserStatus = (status: string): ThunkProfileType => async (dispatch) => {
    try {
        const updateStatusData = await profileAPI.updateStatus(status)
        if (updateStatusData.resultCode === ResultCodesEnum.Success) {
            dispatch(ProfileActions.setStatus(status))
        } else {
            console.log('resultCode < 0')
        }
    } catch (error) {
        console.log('error')
    }
}

export const savePhoto = (file: File) => (dispatch: Dispatch<ActionProfileTypes>) => {
    profileAPI.savePhoto(file)
        .then(response => {
            if (response.resultCode === ResultCodesEnum.Success) {
                dispatch(ProfileActions.savePhotoSuccess(response.data.photos))
            }
        })
}

export const saveProfile = (profile: ProfileType): ThunkProfileType => async (dispatch: Dispatch<any>, getState: any) => {
    const userId = getState().auth.userID
    const saveProfileData = await profileAPI.saveProfile(profile)

    if (saveProfileData.resultCode === ResultCodesEnum.Success) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: saveProfileData.messages[FIRST_ELEMENT_IN_ARRAY]}))
        return Promise.reject(saveProfileData.messages[FIRST_ELEMENT_IN_ARRAY])
    }
}
