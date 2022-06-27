import { FormAction } from 'redux-form';

import { AuthActions } from 'redux/authReducer';
import { initialAuthState } from 'redux/authReducer/authReducer/authReducer';
import { BaseThunkType, InferActionTypes } from 'redux/types';
import { Nullable } from 'types/Nullable';

export type ThunkType = BaseThunkType<ActionAuthReducerType | FormAction>;

export type initialAuthStateType = typeof initialAuthState;

export type ActionAuthReducerType = InferActionTypes<typeof AuthActions>;

export type dataType = {
  userId: Nullable<string>;
  email: Nullable<string>;
  login: Nullable<string>;
};
