import { NewsType } from 'redux/NewsReducer/types';
import { AppStateType } from 'redux/types';

export const getNewsSelector = (state: AppStateType): NewsType[] => state.news.news;
