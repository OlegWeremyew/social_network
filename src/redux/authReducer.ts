import {authApi} from "../Api/api";
import {Dispatch} from "redux";

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

export const authReducer = (state: initialStateType = initialState, action: ActionAuthReducerType): initialStateType => {
    switch (action.type) {
        case "SET-USER-DATA" : {
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
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case 'TOGGLE-IS-AUTH':
            return {
                ...state,
                isAuth: action.isAuth,
            }
        default:
            return state
    }
}

type setUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (userId: string, email: string, login: string, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        payload: {
            userId,
            email,
            login,
            isAuth},
    } as const
}

type setToggleIsFetchingType = ReturnType<typeof setToggleIsFetching>
export const setToggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching: isFetching
    } as const
}

type setToggleIsAuthType = ReturnType<typeof setToggleIsAuth>
export const setToggleIsAuth = (isAuth: boolean) => {
    return {
        type: 'TOGGLE-IS-AUTH',
        isAuth: isAuth
    } as const
}

export const getAuthUserData = () => (dispatch: any) => {
    authApi.getAuth()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}

export const logout = () => (dispatch: any) => {
    authApi.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData( "", "", "", false))
            }
        })
}
