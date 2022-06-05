
import {createSelector} from "reselect";
import {FilterType, UserType} from "../../redux/usersReducer/types";
import {AppStateType} from "../../redux/types";

export const getUsersSelector = (state: AppStateType): UserType[] => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users: UserType[]): Array<UserType> => {
    return users.filter(user => true)
})

export const getPageSize = (state: AppStateType): number => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType): number => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType): number => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType): Array<string> => {
    return state.usersPage.followingInProgress
}

export const getUsersFilter = (state: AppStateType): FilterType => {
    return state.usersPage.filter
}