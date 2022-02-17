import {authApi} from "../Api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {ActionAllType, AppThunkType} from "./reduxStore";

const SET_USER_DATA = "SOCIAL_NETWORK/AUTH/SET-USER-DATA"
const TOGGLE_IS_FETCHING = 'SOCIAL_NETWORK/AUTH/TOGGLE-IS-FETCHING'
const TOGGLE_IS_AUTH = 'SOCIAL_NETWORK/AUTH/TOGGLE-IS-AUTH'

export const authReducer = (state: initialStateType = initialState, action: ActionAuthReducerType): initialStateType => {
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
                isAuth: action.payload.isAuth
            }
        }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload.isFetching,
            }
        case TOGGLE_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload.isAuth,
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
        },
    } as const
}

type setToggleIsFetchingType = ReturnType<typeof setToggleIsFetching>
export const setToggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching,
        },
    } as const
}

type setToggleIsAuthType = ReturnType<typeof setToggleIsAuth>
export const setToggleIsAuth = (isAuth: boolean) => {
    return {
        type: TOGGLE_IS_AUTH,
        payload: {
            isAuth,
        },
    } as const
}

export const getAuthUserData = (): AppThunkType => async (dispatch: Dispatch<ActionAllType>) => {
    const response = await authApi.getAuth()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => async (dispatch: any) => {
    const response = await authApi.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error"
        dispatch(stopSubmit("Login", {_error: message}))
    }
}

export const logout = () => async (dispatch: Dispatch<ActionAllType>) => {
    const response = await authApi.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData("", "", "", false))
    }
}


//Types========================================

export type initialStateType = {
    data: dataType
    isFetching: boolean
    isAuth: boolean
}

type dataType = {
    userId: string
    email: string
    login: string
    isAuth: boolean
}

let initialState = {
    data: {} as dataType,
    isFetching: true,
    isAuth: false,
}

export type ActionAuthReducerType = setUserDataType
    | setToggleIsFetchingType
    | setToggleIsAuthType