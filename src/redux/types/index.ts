import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { rootReducer } from 'redux/reduxStore';

export type AppStateType = ReturnType<typeof rootReducer>;

export type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionTypes<T extends { [key: string]: (...args: any[]) => any }> =
  ReturnType<PropertiesTypes<T>>;

export type BaseThunkType<A extends Action, RT = Promise<void>> = ThunkAction<
  RT,
  AppStateType,
  unknown,
  A
>;
