import {Dispatch} from "redux";
import {AppAction} from "../AppActions";
import {getAuthUserData} from "../../authReducer";

export const initializeApp = () => (dispatch: Dispatch<any>) => {
    const promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(AppAction.initializedSuccess())
        })
}