import {Nullable} from "../../../types/Nullable";
import {AuthReducerEnum} from "../constants";

export const AuthActions = {
    setAuthUserData: (userId: Nullable<string>, email: Nullable<string>, login: Nullable<string>, isAuth: boolean) => {
        return {type: AuthReducerEnum.SET_USER_DATA, payload: {userId, email, login, isAuth}} as const
    },
    getCaptchaUrlSuccess: (captchaUrl: string) => {
        return {type: AuthReducerEnum.GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}} as const
    },
}