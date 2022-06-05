import { UserReducerEnum } from '../constants';
import { FilterType, UserType } from '../types';

export const UserActions = {
  followSuccess: (userID: string) =>
    ({
      type: UserReducerEnum.FOLLOW,
      payload: {
        userID,
      },
    } as const),
  unfollowSuccess: (userID: string) =>
    ({
      type: UserReducerEnum.UNFOLLOW,
      payload: {
        userID,
      },
    } as const),
  setUsers: (users: Array<UserType>) =>
    ({
      type: UserReducerEnum.SET_USERS,
      payload: {
        users,
      },
    } as const),
  setCurrentPage: (currentPage: number) =>
    ({
      type: UserReducerEnum.SET_CURRENT_PAGE,
      payload: {
        currentPage,
      },
    } as const),
  setFilter: (filter: FilterType) =>
    ({
      type: UserReducerEnum.SET_FILTER,
      payload: filter,
    } as const),
  setTotalUsersCount: (totalCount: number) =>
    ({
      type: UserReducerEnum.SET_TOTAL_USERS_COUNT,
      payload: {
        count: totalCount,
      },
    } as const),
  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: UserReducerEnum.TOGGLE_IS_FETCHING,
      payload: {
        isFetching,
      },
    } as const),
  toggleFollowingProgress: (followingInProgress: boolean, userId: string) =>
    ({
      type: UserReducerEnum.TOGGLE_IS_FOLLOWING_IN_PROGRESS,
      payload: {
        followingInProgress,
        userId,
      },
    } as const),
};
