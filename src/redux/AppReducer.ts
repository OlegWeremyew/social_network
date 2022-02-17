import {getAuthUserData} from "./authReducer";
import {AppThunkType} from "./reduxStore";

const SET_INITIALIZED = "SOCIAL_NETWORK/APP/SET-INITIALIZED"

export type ActionAppReducerType = initializedSuccessType

export const appReducer = (state: initialStateType = initialState, action: ActionAppReducerType): initialStateType => {
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
    return {
        type: SET_INITIALIZED,
    } as const
}

export const initializeApp = (): AppThunkType => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}


//Types======================================

export type initialStateType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}