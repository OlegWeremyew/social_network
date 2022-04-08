import {getAuthUserData} from "./authReducer";
import {InferActionTypes} from "./reduxStore";
import {Dispatch} from "redux";

export enum UserReducerEnum {
    SET_INITIALIZED = "SOCIAL_NETWORK/APP/SET-INITIALIZED",
}

const initialAppState = {
    initialized: false
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

export const initializeApp = () => (dispatch: Dispatch<any>) => {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(AppAction.initializedSuccess())
        })
}

//Types======================================
export type ActionAppReducerType = InferActionTypes<typeof AppAction>

export type initialStateAppType = typeof initialAppState