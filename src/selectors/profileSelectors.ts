import {AppStateType} from "../redux/reduxStore";


export const getProfilePageSelector = (state: AppStateType) => {
    return state.profilePage
}

export const getProfilePageProfileSelector = (state: AppStateType) => {
    return state.profilePage.profile
}

export const getProfilePageStatusSelector = (state: AppStateType) => {
    return state.profilePage.status
}

export const getProfilePageProfilePhotosLargeSelector = (state: AppStateType) => {
    return state.profilePage.profile?.photos.large
}