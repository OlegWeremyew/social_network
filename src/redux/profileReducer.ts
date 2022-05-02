import {Dispatch} from "redux";
import {BaseThunkType, InferActionTypes} from "./reduxStore";
import {stopSubmit} from "redux-form";
import {Nullable} from "../types/Nullable";
import {profileAPI} from "../Api";
import {ResultCodesEnum} from "../Api/enums";
import {FIRST_ELEMENT_IN_ARRAY} from "../constants";

export enum ProfileReducerEnum {
    ADD_POST = "SOCIAL_NETWORK/PROFILE/ADD_POST",
    DELETED_POST = "SOCIAL_NETWORK/PROFILE/DELETED_POST",
    SET_USER_PROFILE = "SOCIAL_NETWORK/PROFILE/SET-USER-PROFILE",
    SET_STATUS = "SOCIAL_NETWORK/PROFILE/SET-STATUS",
    SAVE_PHOTO = "SOCIAL_NETWORK/PROFILE/SAVE_PHOTO_SUCCESS",
}

const initialState = {
    posts: [
        {message: "Hi all. My name is Oleg and. I am a front-end developer", likesCount: 12, id: 1},
        {message: "Dinosaurs are great. I love them so much", likesCount: 17, id: 2}
    ] as Array<PostType>,
    profile: null as Nullable<ProfileType>,
    status: "",
}

export const profileReducer = (state = initialState, action: ActionProfileTypes): initialStateProfileType => {

    switch (action.type) {
        case ProfileReducerEnum.ADD_POST: {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.payload.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        }
        case ProfileReducerEnum.DELETED_POST: {
            return {
                ...state,
                posts: state.posts.filter(f => f.id !== action.payload.postId),
            }
        }
        case ProfileReducerEnum.SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.payload.profile
            }
        }
        case ProfileReducerEnum.SET_STATUS: {
            return {
                ...state,
                status: action.payload.status
            }
        }
        case ProfileReducerEnum.SAVE_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.payload.photos} as ProfileType
            }
        }
        default:
            return state
    }
}

export const ProfileActions = {
    addPost: (newPostText: string) => {
        return {type: ProfileReducerEnum.ADD_POST, payload: {newPostText}} as const
    },
    deletePost: (postId: number) => {
        return {type: ProfileReducerEnum.DELETED_POST, payload: {postId}} as const
    },
    setUserProfile: (profile: ProfileType) => {
        return {type: ProfileReducerEnum.SET_USER_PROFILE, payload: {profile}} as const
    },
    setStatus: (status: string) => {
        return {type: ProfileReducerEnum.SET_STATUS, payload: {status}} as const
    },
    savePhotoSuccess: (photos: PhotosType) => {
        return {type: ProfileReducerEnum.SAVE_PHOTO, payload: {photos}} as const
    },
}

// thunks=========================================================
export const getUserProfile = (userId: string): ThunkType => async (dispatch) => {
    const getProfileData = await profileAPI.getProfile(userId)
    dispatch(ProfileActions.setUserProfile(getProfileData))
}

export const getUserStatus = (userId: string): ThunkType => async (dispatch) => {
    const getStatusData = await profileAPI.getStatus(userId)
    dispatch(ProfileActions.setStatus(getStatusData))
}

export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
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

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch: Dispatch<any>, getState: any) => {
    const userId = getState().auth.userID
    const saveProfileData = await profileAPI.saveProfile(profile)

    if (saveProfileData.resultCode === ResultCodesEnum.Success) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: saveProfileData.messages[FIRST_ELEMENT_IN_ARRAY]}))
        return Promise.reject(saveProfileData.messages[FIRST_ELEMENT_IN_ARRAY])
    }
}

//Types=========================================================
type ThunkType = BaseThunkType<ActionProfileTypes | ReturnType<typeof stopSubmit>>

export type initialStateProfileType = typeof initialState

export type ActionProfileTypes = InferActionTypes<typeof ProfileActions>

export type PostType = {
    message: string
    likesCount: number
    id: number
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
} | null

export type PhotosType = {
    small: string
    large: string
}