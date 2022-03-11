import {getAuthUserData} from "./authReducer";
import {AppThunkType} from "./reduxStore";

const SET_INITIALIZED = "SOCIAL_NETWORK/APP/SET-INITIALIZED"

export const appReducer = (state: initialStateAppType = initialAppState, action: ActionAppReducerType): initialStateAppType => {
    switch (action.type) {
        case SET_INITIALIZED : {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}

type initializedSuccessType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () => {
    return {type: SET_INITIALIZED} as const
}

export const initializeApp = (): AppThunkType => (dispatch: any) => {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}

//Types======================================

export type ActionAppReducerType = initializedSuccessType

export type initialStateAppType = typeof initialAppState

const initialAppState = {
    initialized: false
}