import { AppAction } from 'redux/AppReducer';
import { initialAppState } from 'redux/AppReducer/AppReducer/AppReducer';
import { InferActionTypes } from 'redux/types';

export type ActionAppReducerType = InferActionTypes<typeof AppAction>;

export type initialStateAppType = typeof initialAppState;
