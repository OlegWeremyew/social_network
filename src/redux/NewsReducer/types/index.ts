import { NewsActions } from 'redux/NewsReducer';
import { initialNewsState } from 'redux/NewsReducer/NewsReducer/NewsReducer';
import { InferActionTypes } from 'redux/types';

export type initialNewsStateType = typeof initialNewsState;

export type ActionNewsTypes = InferActionTypes<typeof NewsActions>;

export type NewsType = {
  id: string;
  image: string;
  text: string;
  title: string;
};

export type ImagesType = {
  imageForBackground: string;
};
