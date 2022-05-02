import {AppStateType} from "../../redux/reduxStore";
import {Nullable} from "../../types/Nullable";

export const getAuthIsAuthSelector = (state: AppStateType): boolean => {
    return state.auth.isAuth
}

export const getAuthAuthorizedUserIDSelector = (state: AppStateType): Nullable<string> => {
    return state.auth.data.userId
}

export const getAuthCaptchaUrlSelector = (state: AppStateType): Nullable<string> => {
    return state.auth.captchaUrl
}

export const getAuthDataLoginSelector = (state: AppStateType): Nullable<string> => {
    return state.auth.data.login
}