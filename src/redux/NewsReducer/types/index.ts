import { InferActionTypes } from '../../types';
import { NewsActions } from '../NewsActions';
import { initialNewsState } from '../NewsReducer/NewsReducer';

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
