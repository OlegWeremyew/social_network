import { AppStateType } from 'redux/types';
import { Nullable } from 'types/Nullable';

export const getAuthIsAuthSelector = (state: AppStateType): boolean => state.auth.isAuth;

export const getAuthAuthorizedUserIDSelector = (state: AppStateType): Nullable<string> =>
  state.auth.data.userId;

export const getAuthCaptchaUrlSelector = (state: AppStateType): Nullable<string> =>
  state.auth.captchaUrl;

export const getAuthDataLoginSelector = (state: AppStateType): Nullable<string> =>
  state.auth.data.login;
