import {AppStateType} from "../../redux/reduxStore";
import {NewsType} from "../../redux/NewsReducer";


export const getNewsSelector = (state: AppStateType): NewsType[] => {
    return state.news.news
}