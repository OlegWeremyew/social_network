import { Dispatch } from 'redux';

import { AppAction } from 'redux/AppReducer';
import { getAuthUserData } from 'redux/authReducer';

export const initializeApp = () => (dispatch: Dispatch<any>) => {
  const promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(AppAction.initializedSuccess());
  });
};
