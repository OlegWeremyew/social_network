import { AuthReducerEnum } from 'redux/authReducer/constants';
import { Nullable } from 'types/Nullable';

export const AuthActions = {
  setAuthUserData: (
    userId: Nullable<string>,
    email: Nullable<string>,
    login: Nullable<string>,
    isAuth: boolean,
  ) =>
    ({
      type: AuthReducerEnum.SET_USER_DATA,
      payload: { userId, email, login, isAuth },
    } as const),
  getCaptchaUrlSuccess: (captchaUrl: string) =>
    ({
      type: AuthReducerEnum.GET_CAPTCHA_URL_SUCCESS,
      payload: { captchaUrl },
    } as const),
};
