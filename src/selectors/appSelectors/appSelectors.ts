import { AppStateType } from 'redux/types';

export const getInitializedAppSelector = (state: AppStateType): boolean =>
  state.app.initialized;
