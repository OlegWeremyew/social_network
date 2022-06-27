import { createSelector } from 'reselect';

import { AppStateType } from 'redux/types';
import { FilterType, UserType } from 'redux/usersReducer/types';

export const getUsersSelector = (state: AppStateType): UserType[] =>
  state.usersPage.users;

export const getUsers = createSelector(
  getUsersSelector,
  (users: UserType[]): Array<UserType> => users.filter(user => true),
);

export const getPageSize = (state: AppStateType): number => state.usersPage.pageSize;

export const getTotalUsersCount = (state: AppStateType): number =>
  state.usersPage.totalUsersCount;

export const getCurrentPage = (state: AppStateType): number =>
  state.usersPage.currentPage;

export const getIsFetching = (state: AppStateType): boolean => state.usersPage.isFetching;

export const getFollowingInProgress = (state: AppStateType): Array<string> =>
  state.usersPage.followingInProgress;

export const getUsersFilter = (state: AppStateType): FilterType => state.usersPage.filter;
