import {AppStateType} from "../../redux/types";


export const getInitializedAppSelector = (state: AppStateType): boolean => {
    return state.app.initialized
}

