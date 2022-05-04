import {ProfileReducerEnum} from "../constants";
import {PhotosType, ProfileType} from "../types";

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