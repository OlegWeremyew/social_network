import {getAuthUserData} from "./authReducer";
import {AppThunkType, InferActionTypes} from "./reduxStore";

export enum UserReducerEnum {
    SET_INITIALIZED = "SOCIAL_NETWORK/APP/SET-INITIALIZED",
}

export const appReducer = (state: initialStateAppType = initialAppState, action: ActionAppReducerType): initialStateAppType => {
    switch (action.type) {
        case UserReducerEnum.SET_INITIALIZED : {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}

const AppAction = {
    initializedSuccess : () => {return {type: UserReducerEnum.SET_INITIALIZED} as const}
}

export const initializeApp = (): AppThunkType => (dispatch: any) => {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(AppAction.initializedSuccess())
        })
}

//Types======================================

export type ActionAppReducerType = InferActionTypes<typeof AppAction>

export type initialStateAppType = typeof initialAppState

const initialAppState = {
    initialized: false
}