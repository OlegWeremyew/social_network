import {APIResponseType, ResultCodesEnum} from "../Api/api";
import {BaseThunkType, InferActionTypes} from "./reduxStore";
import {updateObjectInArray} from "../utils/objectsHellper";
import {usersAPI} from "../Api/usersAPI";
import {Dispatch} from "redux";
import {Nullable} from "../types/Nullable";

export enum UserReducerEnum {
    FOLLOW = "SOCIAL_NETWORK/USERS/FOLLOW",
    UNFOLLOW = "SOCIAL_NETWORK/USERS/UNFOLLOW",
    SET_USERS = "SOCIAL_NETWORK/USERS/SET_USERS",
    SET_CURRENT_PAGE = "SOCIAL_NETWORK/USERS/SET-CURRENT-PAGE",
    SET_TOTAL_USERS_COUNT = "SOCIAL_NETWORK/USERS/SET-TOTAL-USERS-COUNT",
    TOGGLE_IS_FETCHING = "SOCIAL_NETWORK/USERS/TOGGLE-IS-FETCHING",
    TOGGLE_IS_FOLLOWING_IN_PROGRESS = "SOCIAL_NETWORK/USERS/TOGGLE-IS-FOLLOWING-IN-PROGRESS",
}

const initialState: initialStateType = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as string[],
}

export const usersReducer = (state: initialStateType = initialState, action: ActionUsersTypes): initialStateType => {
    switch (action.type) {
        case UserReducerEnum.FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.userID, "id", {followed: true})
            }
        }
        case UserReducerEnum.UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.userID, "id", {followed: false})
            }
        }
        case UserReducerEnum.SET_USERS: {
            return {
                ...state, users: [...action.payload.users]
            }
        }
        case UserReducerEnum.SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.payload.currentPage
            }
        }
        case UserReducerEnum.SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.payload.count
            }
        }
        case UserReducerEnum.TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.payload.isFetching
            }
        }
        case UserReducerEnum.TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
            return {
                ...state, followingInProgress: action.payload.followingInProgress
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        }
        default:
            return state
    }
}

export const UserActions = {
    followSuccess: (userID: string) => {
        return {
            type: UserReducerEnum.FOLLOW,
            payload: {
                userID,
            }
        } as const
    },
    unfollowSuccess: (userID: string) => {
        return {
            type: UserReducerEnum.UNFOLLOW,
            payload: {
                userID,
            }
        } as const
    },
    setUsers: (users: Array<UserType>) => {
        return {
            type: UserReducerEnum.SET_USERS,
            payload: {
                users,
            }
        } as const
    },
    setCurrentPage: (currentPage: number) => {
        return {
            type: UserReducerEnum.SET_CURRENT_PAGE,
            payload: {
                currentPage,
            }
        } as const
    },
    setTotalUsersCount: (totalCount: number) => {
        return {
            type: UserReducerEnum.SET_TOTAL_USERS_COUNT,
            payload: {
                count: totalCount,
            }
        } as const
    },
    toggleIsFetching: (isFetching: boolean) => {
        return {
            type: UserReducerEnum.TOGGLE_IS_FETCHING,
            payload: {
                isFetching,
            }
        } as const
    },
    toggleFollowingProgress: (followingInProgress: boolean, userId: string) => {
        return {
            type: UserReducerEnum.TOGGLE_IS_FOLLOWING_IN_PROGRESS,
            payload: {
                followingInProgress,
                userId,
            }
        } as const
    },
}

//=======================thunk

export const requestUsers = (page: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(UserActions.toggleIsFetching(true))
    dispatch(UserActions.setCurrentPage(page))

    const getUsersData = await usersAPI.getUsers(page, pageSize)

    dispatch(UserActions.toggleIsFetching(false))
    dispatch(UserActions.setUsers(getUsersData.items))
    dispatch(UserActions.setTotalUsersCount(getUsersData.totalCount))
}

export const followUnfollowFlow = async (dispatch: Dispatch<ActionUsersTypes>, userId: string, apiMethod: (userId: string)=> Promise<APIResponseType>, actionCreator: (userId: string) => ActionUsersTypes) => {
    dispatch(UserActions.toggleFollowingProgress(true, userId))
    const response = await apiMethod(userId)

    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(UserActions.toggleFollowingProgress(false, userId))
}

export const follow = (userId: string): ThunkType => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), UserActions.followSuccess)
}

export const unFollow = (userId: string): ThunkType => async (dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), UserActions.unfollowSuccess)
}

//Types======================================================
type ThunkType = BaseThunkType<ActionUsersTypes>

export type initialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}

export type ActionUsersTypes = InferActionTypes<typeof UserActions>

export type UserType = {
    name: string
    id: string
    uniqueUrlName: string
    photos: { small: Nullable<string>, large: Nullable<string> }
    status: string
    followed: boolean
}
