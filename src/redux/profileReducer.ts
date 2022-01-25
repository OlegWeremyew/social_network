import {Dispatch} from "redux";
import {usersAPI} from "../Api/api";

export type PostType = {
    message: string
    likesCount: number
    id: number
}

export type ProfileType = {
    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string,
        "github": string,
        "mainLink": string
    },
    "lookingForAJob": string,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
} | null

const initialState = {
    posts: [
        {message: "Hello", likesCount: 12, id: 1},
        {message: "Dinosaurus are great", likesCount: 17, id: 2}
    ] as Array<PostType>,
    newPostText: "" as string,
    profile: null as ProfileType,
}
export type initialStateType = typeof initialState

export const profileReducer = (state = initialState, action: ActionTypes): initialStateType => {

    switch (action.type) {
        case "ADD_POST": {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 12
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case "UPDATE_NEW_POST_TEXT": {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }

}

type ActionTypes = addPostType
    | updateNewPostTextType
    | setUserProfileType

export type addPostType = ReturnType<typeof addPost>
export const addPost = () => {
    return {
        type: "ADD_POST",
    } as const
}

export type updateNewPostTextType = ReturnType<typeof updateNewPostText>
export const updateNewPostText = (newText: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: newText
    } as const
}

export type setUserProfileType = ReturnType<typeof setUserProfile>
const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile,
    } as const
}


export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
}

