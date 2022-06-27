import { v1 } from 'uuid';

import { imagesArray, newsArray } from './constants';

import { NewsReducerEnum } from 'redux/NewsReducer/constants';
import {
  ActionNewsTypes,
  ImagesType,
  initialNewsStateType,
  NewsType,
} from 'redux/NewsReducer/types';

export const initialNewsState = {
  news: newsArray as NewsType[],
  images: imagesArray as ImagesType[],
};

export const newsReducer = (
  state: initialNewsStateType = initialNewsState,
  action: ActionNewsTypes,
): initialNewsStateType => {
  switch (action.type) {
    case NewsReducerEnum.ADD_NEWS: {
      const newsItem: NewsType = {
        id: v1(),
        image:
          state.images[Math.round(Math.random() * state.images.length)]
            .imageForBackground,
        text: 'Введите ваш текст',
        title: action.payload.newTitle,
      };
      return {
        ...state,
        news: [...state.news, newsItem],
      };
    }
    case NewsReducerEnum.CHANGE_NEWS_TEXT: {
      return {
        ...state,
        news: state.news.map(m =>
          m.id === action.payload.id ? { ...m, text: action.payload.text } : m,
        ),
      };
    }
    case NewsReducerEnum.CHANGE_NEWS_TITLE: {
      return {
        ...state,
        news: state.news.map(m =>
          m.id === action.payload.id ? { ...m, title: action.payload.title } : m,
        ),
      };
    }
    case NewsReducerEnum.DELETE_NEWS: {
      return {
        ...state,
        news: state.news.filter(f => f.id !== action.payload.id),
      };
    }
    case NewsReducerEnum.SET_HISTORY_FROM_SESSION_STORAGE: {
      return {
        ...state,
        news: action.payload.list,
      };
    }
    default:
      return state;
  }
};
