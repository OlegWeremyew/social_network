import { UserReducerEnum } from 'redux/AppReducer/constants';

export const AppAction = {
  initializedSuccess: () => ({ type: UserReducerEnum.SET_INITIALIZED } as const),
};
