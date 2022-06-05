import {stopSubmit} from "redux-form";
import {initialProfileState} from "../profileReducer/profileReducer";
import {ProfileActions} from "../profileActions";
import {BaseThunkType, InferActionTypes} from "../../types";

export type ThunkProfileType = BaseThunkType<ActionProfileTypes | ReturnType<typeof stopSubmit>>

export type initialStateProfileType = typeof initialProfileState

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