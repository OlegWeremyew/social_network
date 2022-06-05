import { UserReducerEnum } from '../constants';
import { ActionAppReducerType, initialStateAppType } from '../types';

export const initialAppState = {
  initialized: false,
};

export const appReducer = (
  state: initialStateAppType = initialAppState,
  action: ActionAppReducerType,
): initialStateAppType => {
  switch (action.type) {
    case UserReducerEnum.SET_INITIALIZED: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};
