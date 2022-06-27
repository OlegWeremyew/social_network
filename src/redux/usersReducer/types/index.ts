import { BaseThunkType, InferActionTypes } from 'redux/types';
import { UserActions } from 'redux/usersReducer';
import { initialUsersState } from 'redux/usersReducer/usersReducer/usersReducer';
import { Nullable } from 'types/Nullable';

export type ThunkUsersType = BaseThunkType<ActionUsersTypes>;

export type initialUsersStateType = {
  users: Array<UserType>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: string[];
  filter: {
    term: string;
    friend: Nullable<boolean>;
  };
};

export type ActionUsersTypes = InferActionTypes<typeof UserActions>;
export type FilterType = typeof initialUsersState.filter;

export type UserType = {
  name: string;
  id: string;
  uniqueUrlName: string;
  photos: { small: Nullable<string>; large: Nullable<string> };
  status: string;
  followed: boolean;
};
