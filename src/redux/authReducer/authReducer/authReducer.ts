import {Nullable} from "../../../types/Nullable";
import {AuthReducerEnum} from "../constants";
import {ActionAuthReducerType, dataType, initialAuthStateType} from "../types";

export const initialAuthState = {
    data: {} as dataType,
    isFetching: true,
    isAuth: false,
    userID: null as Nullable<string>,
    email: null as Nullable<string>,
    login: null as Nullable<string>,
    captchaUrl: null as Nullable<string>,
}

export const authReducer = (state: initialAuthStateType = initialAuthState, action: ActionAuthReducerType): initialAuthStateType => {
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
