import {Dispatch} from "redux";
import {profileAPI} from "../Api/api";
import {ActionAllType} from "./reduxStore";

const ADD_POST = "SOCIAL_NETWORK/PROFILE/ADD_POST"
const DELETED_POST = "SOCIAL_NETWORK/PROFILE/DELETED_POST"
const SET_USER_PROFILE = "SOCIAL_NETWORK/PROFILE/SET-USER-PROFILE"
const SET_STATUS = "SOCIAL_NETWORK/PROFILE/SET-STATUS"

export type initialStateType = typeof initialState

const initialState = {
    posts: [
        {message: "Hello", likesCount: 12, id: 1},
        {message: "Dinosaurs are great", likesCount: 17, id: 2}
    ] as Array<PostType>,
    profile: null as ProfileType,
    status: "",
}

export const profileReducer = (state = initialState, action: ActionProfileTypes): initialStateType => {

    switch (action.type) {
        case ADD_POST: {
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
        case DELETED_POST: {
            return {
                ...state,
                posts: state.posts.filter(f => f.id !== action.payload.postId),
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.payload.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.payload.status
            }
        }
        default:
            return state
    }
}

export type addPostType = ReturnType<typeof addPost>
export const addPost = (newPostText: string) => {
    return {
        type: ADD_POST,
        payload: {
            newPostText,
        }
    } as const
}

export type deletePostType = ReturnType<typeof deletePost>
export const deletePost = (postId: number) => {
    return {
        type: DELETED_POST,
        payload: {
            postId,
        }
    } as const
}


export type setUserProfileType = ReturnType<typeof setUserProfile>
const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile,
        }
    } as const
}

export type setProfileStatusType = ReturnType<typeof setStatus>
const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        payload: {
            status,
        }
    } as const
}


// thunks=========================================================
export const getUserProfile = (userId: string) => async (dispatch: Dispatch<ActionAllType>) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getUserStatus = (userId: string) => async (dispatch: Dispatch<ActionAllType>) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateUserStatus = (status: string) => async (dispatch: Dispatch<ActionAllType>) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}


//Types=========================================================
export type ActionProfileTypes = addPostType
    | setUserProfileType
    | setProfileStatusType
    | deletePostType


export type PostType = {
    message: string
    likesCount: number
    id: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: string
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
} | null