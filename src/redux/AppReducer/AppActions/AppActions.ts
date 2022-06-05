import { UserReducerEnum } from '../constants';

export const AppAction = {
  initializedSuccess: () => ({ type: UserReducerEnum.SET_INITIALIZED } as const),
};
