import {Dispatch} from "redux";
import {profileAPI, ResultCodesEnum} from "../Api/api";
import {ActionAllType, AppThunkType, InferActionTypes} from "./reduxStore";
import {stopSubmit} from "redux-form";

export enum ProfileReducerEnum {
    ADD_POST = "SOCIAL_NETWORK/PROFILE/ADD_POST",
    DELETED_POST = "SOCIAL_NETWORK/PROFILE/DELETED_POST",
    SET_USER_PROFILE = "SOCIAL_NETWORK/PROFILE/SET-USER-PROFILE",
    SET_STATUS = "SOCIAL_NETWORK/PROFILE/SET-STATUS",
    SAVE_PHOTO = "SOCIAL_NETWORK/PROFILE/SAVE_PHOTO_SUCCESS",
}

const initialState = {
    posts: [
        {message: "Hello", likesCount: 12, id: 1},
        {message: "Dinosaurs are great", likesCount: 17, id: 2}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "",
}

export const profileReducer = (state = initialState, action: ActionProfileTypes): initialStateType => {

    switch (action.type) {
        case ProfileReducerEnum.ADD_POST: {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.payload.newPostText,
                likesCount: 12
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
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
export const getUserProfile = (userId: string) => async (dispatch: Dispatch<ActionAllType>) => {
    const getProfileData = await profileAPI.getProfile(userId)
    dispatch(ProfileActions.setUserProfile(getProfileData))
}

export const getUserStatus = (userId: string) => async (dispatch: Dispatch<ActionAllType>) => {
    const getStatusData = await profileAPI.getStatus(userId)
    dispatch(ProfileActions.setStatus(getStatusData))
}

export const updateUserStatus = (status: string) => async (dispatch: Dispatch<ActionAllType>) => {
    try {
        const updateStatusData = await profileAPI.updateStatus(status)
        if (updateStatusData.resultCode === ResultCodesEnum.Success) {
            dispatch(ProfileActions.setStatus(status))
        } else {
            console.log('resultCode < 0')
        }
    } catch (error) {
        //alert("error")
    }
}

export const savePhoto = (file: File) => (dispatch: Dispatch<ActionAllType>) => {
    profileAPI.savePhoto(file)
        .then(response => {
            if (response.data.resultCode === ResultCodesEnum.Success) {
                dispatch(ProfileActions.savePhotoSuccess(response.data.data.photos))
            }
        })
}

export const saveProfile = (profile: ProfileType): AppThunkType => async (dispatch: Dispatch<any>, getState: any) => {
    const userId = getState().auth.userID
    const saveProfileData = await profileAPI.saveProfile(profile)

    if (saveProfileData.resultCode === ResultCodesEnum.Success) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: saveProfileData.messages[0]}))
        return Promise.reject(saveProfileData.messages[0])
    }
}


//Types=========================================================
export type initialStateType = typeof initialState

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

type PhotosType = {
    small: string
    large: string
}