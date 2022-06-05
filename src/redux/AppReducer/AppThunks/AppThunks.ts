import { Dispatch } from 'redux';

import { getAuthUserData } from '../../authReducer';
import { AppAction } from '../AppActions';

export const initializeApp = () => (dispatch: Dispatch<any>) => {
  const promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(AppAction.initializedSuccess());
  });
};
