
import {Nullable} from "../../types/Nullable";
import {AppStateType} from "../../redux/types";

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