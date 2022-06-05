import { FormAction } from 'redux-form';

import { Nullable } from '../../../types/Nullable';
import { BaseThunkType, InferActionTypes } from '../../types';
import { AuthActions } from '../authActions';
import { initialAuthState } from '../authReducer/authReducer';

export type ThunkType = BaseThunkType<ActionAuthReducerType | FormAction>;

export type initialAuthStateType = typeof initialAuthState;

export type ActionAuthReducerType = InferActionTypes<typeof AuthActions>;

export type dataType = {
  userId: Nullable<string>;
  email: Nullable<string>;
  login: Nullable<string>;
};
