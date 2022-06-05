
import {Nullable} from "../../types/Nullable";
import {Undetectable} from "../../types/Undetectable";
import {initialStateProfileType, ProfileType} from "../../redux/profileReducer/types";
import {AppStateType} from "../../redux/types";

export const getProfilePageSelector = (state: AppStateType): initialStateProfileType => {
    return state.profilePage
}

export const getProfilePageProfileSelector = (state: AppStateType): ProfileType => {
    return state.profilePage.profile
}

export const getProfilePageStatusSelector = (state: AppStateType): string => {
    return state.profilePage.status
}

export const getProfilePageProfilePhotosLargeSelector = (state: AppStateType): Nullable<Undetectable<string>> => {
    return state.profilePage.profile?.photos.large
}