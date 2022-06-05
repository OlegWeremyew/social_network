import { EMPTY_STRING, ZERO_VALUE } from '../../../constants';
import { Nullable } from '../../../types/Nullable';
import { updateObjectInArray } from '../../../utils';
import { UserReducerEnum } from '../constants';
import { ActionUsersTypes, initialUsersStateType, UserType } from '../types';

export const initialUsersState: initialUsersStateType = {
  users: [] as UserType[],
  pageSize: 9,
  totalUsersCount: ZERO_VALUE,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as string[],
  filter: {
    term: EMPTY_STRING,
    friend: null as Nullable<boolean>,
  },
};

export const usersReducer = (
  state: initialUsersStateType = initialUsersState,
  action: ActionUsersTypes,
): initialUsersStateType => {
  switch (action.type) {
    case UserReducerEnum.FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload.userID, 'id', {
          followed: true,
        }),
      };
    }
    case UserReducerEnum.UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.payload.userID, 'id', {
          followed: false,
        }),
      };
    }
    case UserReducerEnum.SET_USERS: {
      return {
        ...state,
        users: [...action.payload.users],
      };
    }
    case UserReducerEnum.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload.currentPage,
      };
    }
    case UserReducerEnum.SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.payload.count,
      };
    }
    case UserReducerEnum.TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.payload.isFetching,
      };
    }
    case UserReducerEnum.SET_FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case UserReducerEnum.TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.payload.followingInProgress
          ? [...state.followingInProgress, action.payload.userId]
          : state.followingInProgress.filter(id => id !== action.payload.userId),
      };
    }
    default:
      return state;
  }
};
