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
}

let initialState = {
    data: {} as dataType,
    isFetching: true,
    isAuth: false,
}

export type ActionType = setUserDataType
    | setToggleIsFetchingType
    | setToggleIsAuthType

export const authReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "SET-USER-DATA" : {
            return {
                ...state,
                ...action.data,
                isAuth: true,
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
export const setAuthUserData = (userId: string, email: string, login: string) => {
    return {
        type: "SET-USER-DATA",
        data: {userId, email, login},
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

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authApi.getAuth()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}
