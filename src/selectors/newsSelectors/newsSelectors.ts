import {AppStateType} from "../../redux/reduxStore";
import {NewsType} from "../../redux/NewsReducer/types";


export const getNewsSelector = (state: AppStateType): NewsType[] => {
    return state.news.news
}