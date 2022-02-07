import {getAuthUserData} from "./authReducer";
import {AppThunkType} from "./reduxStore";

export type initialStateType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}

export type ActionAppReducerType = initializedSuccessType

export const appReducer = (state: initialStateType = initialState, action: ActionAppReducerType): initialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED" : {
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
        type: 'SET-INITIALIZED',
    } as const
}

export const initializeApp = (): AppThunkType => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })

}
