import { initialStateProfileType, ProfileType } from 'redux/profileReducer/types';
import { AppStateType } from 'redux/types';
import { Nullable } from 'types/Nullable';
import { Undetectable } from 'types/Undetectable';

export const getProfilePageSelector = (state: AppStateType): initialStateProfileType =>
  state.profilePage;

export const getProfilePageProfileSelector = (state: AppStateType): ProfileType =>
  state.profilePage.profile;

export const getProfilePageStatusSelector = (state: AppStateType): string =>
  state.profilePage.status;

export const getProfilePageProfilePhotosLargeSelector = (
  state: AppStateType,
): Nullable<Undetectable<string>> => state.profilePage.profile?.photos.large;
