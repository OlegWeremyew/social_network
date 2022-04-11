import {ResultCodesEnum} from "../Api/api";
import {Dispatch} from "redux";
import {FormAction, stopSubmit} from "redux-form";
import {BaseThunkType, InferActionTypes} from "./reduxStore";
import {authApi} from "../Api/authApi";
import {securityApi} from "../Api/securityApi";
import {Nullable} from "../types/Nullable";

export enum AuthReducerEnum {
    SET_USER_DATA = "SOCIAL_NETWORK/AUTH/SET-USER-DATA",
    GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS",
}

const initialState = {
    data: {} as dataType,
    isFetching: true,
    isAuth: false,
    userID: null as Nullable<string>,
    email: null as Nullable<string>,
    login: null as Nullable<string>,
    captchaUrl: null as Nullable<string>,
}

export const authReducer = (state: initialAuthStateType = initialState, action: ActionAuthReducerType): initialAuthStateType => {
    switch (action.type) {
        case AuthReducerEnum.SET_USER_DATA : {
            return {
                ...state,
                data: {
                    ...state.data,
                    email: action.payload.email,
                    login: action.payload.login,
                    userId: action.payload.userId,
                },
                userID: action.payload.userId,
                isAuth: action.payload.isAuth,
            }
        }
        case AuthReducerEnum.GET_CAPTCHA_URL_SUCCESS : {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}

const AuthActions = {
    setAuthUserData: (userId: Nullable<string>, email: Nullable<string>, login: Nullable<string>, isAuth: boolean) => {
        return {type: AuthReducerEnum.SET_USER_DATA, payload: {userId, email, login, isAuth}} as const
    },
    getCaptchaUrlSuccess: (captchaUrl: string) => {
        return {type: AuthReducerEnum.GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}} as const
    },
}

//Thunk
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


//Types========================================
type ThunkType = BaseThunkType<ActionAuthReducerType | FormAction>

export type initialAuthStateType = typeof initialState

export type ActionAuthReducerType = InferActionTypes<typeof AuthActions>

type dataType = {
    userId: Nullable<string>
    email: Nullable<string>
    login: Nullable<string>
}