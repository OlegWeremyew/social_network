import { UserReducerEnum } from 'redux/AppReducer/constants';
import { ActionAppReducerType, initialStateAppType } from 'redux/AppReducer/types';

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
