import {AppStateType} from "../redux/reduxStore";


export const getAuthIsAuthSelector = (state: AppStateType) => {
    return state.auth.isAuth
}

export const getAuthAuthorizedUserIDSelector = (state: AppStateType) => {
    return state.auth.data.userId
}

export const getAuthCaptchaUrlSelector = (state: AppStateType) => {
    return state.auth.captchaUrl
}

export const getAuthDataLoginSelector = (state: AppStateType) => {
    return state.auth.data.login
}