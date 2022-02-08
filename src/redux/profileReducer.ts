import {Dispatch} from "redux";
import {profileAPI} from "../Api/api";
import {ActionAllType} from "./reduxStore";

const ADD_POST = "ADD_POST"
const DELETED_POST = "DELETED_POST"
const SET_USER_PROFILE = "SET-USER-PROFILE"
const SET_STATUS = "SET-STATUS"

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

const initialState = {
    posts: [
        {message: "Hello", likesCount: 12, id: 1},
        {message: "Dinosaurs are great", likesCount: 17, id: 2}
    ] as Array<PostType>,
    profile: null as ProfileType,
    status: "",
}
export type initialStateType = typeof initialState

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
            newPostText
        },
    } as const
}

export type deletePostType = ReturnType<typeof deletePost>
export const deletePost = (postId: number) => {
    return {
        type: DELETED_POST,
        payload: {
            postId,
        },
    } as const
}


export type setUserProfileType = ReturnType<typeof setUserProfile>
const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        payload: {
            profile,
        },
    } as const
}

export type setProfileStatusType = ReturnType<typeof setStatus>
const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        payload: {
            status,
        },
    } as const
}


// thunks -----------------------------------------------
export const getUserProfile = (userId: string) => (dispatch: Dispatch<ActionAllType>) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getUserStatus = (userId: string) => (dispatch: Dispatch<ActionAllType>) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateUserStatus = (status: string) => (dispatch: Dispatch<ActionAllType>) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

