import {UserReducerEnum} from "../constants";


export const AppAction = {
    initializedSuccess : () => {return {type: UserReducerEnum.SET_INITIALIZED} as const}
}