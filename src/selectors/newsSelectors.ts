import {AppStateType} from "../redux/reduxStore";


export const getNewsSelector = (state: AppStateType) => {
    return state.news.news
}