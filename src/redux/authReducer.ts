import {authApi, securityApi} from "../Api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {ActionAllType, AppThunkType} from "./reduxStore";

const SET_USER_DATA = "SOCIAL_NETWORK/AUTH/SET-USER-DATA"
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS"

let initialState = {
    data: {} as dataType,
    isFetching: true,
    isAuth: false,
    userID: null as (string | null),
    email: null as (string | null),
    login: null as (string | null),
    captchaUrl: null as (string | null),
}

export const authReducer = (state: initialAuthStateType = initialState, action: ActionAuthReducerType): initialAuthStateType => {
    switch (action.type) {
        case SET_USER_DATA : {
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
        case GET_CAPTCHA_URL_SUCCESS : {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}

type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: string, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    } as const
}

type getCaptchaUrlSuccessType = ReturnType<typeof getCaptchaUrlSuccess>
export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: {
            captchaUrl
        }
    } as const
}

export const getAuthUserData = (): AppThunkType => async (dispatch: Dispatch<ActionAllType>) => {
    const response = await authApi.getAuth()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunkType => async (dispatch: any) => {
    const response = await authApi.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 1) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error"
        dispatch(stopSubmit("Login", {_error: message}))
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    const response = await securityApi.getCaptchaUrl()
    const captchaUrl = response.data.url
    debugger
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch: Dispatch<ActionAllType>) => {
    const response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData("", "", "", false))
    }
}


//Types========================================

export type initialAuthStateType = typeof initialState;

type dataType = {
    userId: string
    email: string
    login: string
}

export type ActionAuthReducerType = setUserDataType | getCaptchaUrlSuccessType
