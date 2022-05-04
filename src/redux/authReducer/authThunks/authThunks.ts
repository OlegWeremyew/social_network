import {authApi, securityApi} from "../../../Api";
import {ResultCodesEnum} from "../../../Api/enums";
import {stopSubmit} from "redux-form";
import {ThunkType} from "../types";
import {AuthActions} from "../authActions";

export const getAuthUserData = (): ThunkType => async (dispatch) => {
    const MyData = await authApi.getAuth()
    if (MyData.resultCode === ResultCodesEnum.Success) {
        let {id, email, login} = MyData.data
        dispatch(AuthActions.setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch: any) => {
    const loginData = await authApi.login(email, password, rememberMe, captcha)
    if (loginData.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === ResultCodesEnum.Error) {
            dispatch(getCaptchaUrl())
        }
        let message = loginData.messages.length > 0
            ? loginData.messages[0]
            : "Some error"
        dispatch(stopSubmit("Login", {_error: message}))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const captchaData = await securityApi.getCaptchaUrl()
    const captchaUrl = captchaData.url
    dispatch(AuthActions.getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): ThunkType => async (dispatch) => {
    const logoutData = await authApi.logout()
    if (logoutData.resultCode === ResultCodesEnum.Success) {
        dispatch(AuthActions.setAuthUserData(null, null, null, false))
    }
}