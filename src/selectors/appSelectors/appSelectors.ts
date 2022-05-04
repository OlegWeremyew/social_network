import {AppStateType} from "../../redux/reduxStore";

export const getInitializedAppSelector = (state: AppStateType): boolean => {
    return state.app.initialized
}

