import {Dispatch} from "redux";
import {usersAPI} from "../Api/api";
import {ActionAllType} from "./reduxStore";
import {updateObjectInArray} from "../utils/objectsHellper";

const FOLLOW = "SOCIAL_NETWORK/USERS/FOLLOW"
const UNFOLLOW = "SOCIAL_NETWORK/USERS/UNFOLLOW"
const SET_USERS = "SOCIAL_NETWORK/USERS/SET_USERS"
const SET_CURRENT_PAGE = "SOCIAL_NETWORK/USERS/SET-CURRENT-PAGE"
const SET_TOTAL_USERS_COUNT = "SOCIAL_NETWORK/USERS/SET-TOTAL-USERS-COUNT"
const TOGGLE_IS_FETCHING = "SOCIAL_NETWORK/USERS/TOGGLE-IS-FETCHING"
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "SOCIAL_NETWORK/USERS/TOGGLE-IS-FOLLOWING-IN-PROGRESS"

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
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.userID, "id", {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.userID, "id", {followed: false})
            }
        }
        case SET_USERS: {
            return {
                ...state, users: [...action.payload.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.payload.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.payload.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.payload.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
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

export type followType = ReturnType<typeof followSuccess>
export const followSuccess = (userID: string) => {
    return {
        type: FOLLOW,
        payload: {
            userID,
        }
    } as const
}

export type unFollowType = ReturnType<typeof unfollowSuccess>
export const unfollowSuccess = (userID: string) => {
    return {
        type: UNFOLLOW,
        payload: {
            userID,
        }
    } as const
}

export type setUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        payload: {
            users,
        }
    } as const
}

export type setCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage,
        }
    } as const
}

export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        payload: {
            count: totalCount,
        }
    } as const
}

export type setIsFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        payload: {
            isFetching,
        }
    } as const
}

export type toggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>
export const toggleFollowingProgress = (followingInProgress: boolean, userId: string) => {
    return {
        type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
        payload: {
            followingInProgress,
            userId,
        }
    } as const
}

//=======================thunk

export const requestUsers = (page: number, pageSize: number) => async (dispatch: Dispatch<ActionAllType>) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    const data = await usersAPI.getUsers(page, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

export const followUnfollowFlow = async (dispatch: any, userId: string, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    const response = await apiMethod(userId)

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId: string) => async (dispatch: Dispatch<ActionAllType>) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unFollow = (userId: string) => async (dispatch: Dispatch<ActionAllType>) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}


//Types======================================================

export type ActionUsersTypes = followType
    | unFollowType
    | setUsersType
    | setCurrentPageType
    | setTotalUsersCountType
    | setIsFetchingType
    | toggleFollowingProgressType

export type UserType = {
    name: string
    id: string
    uniqueUrlName: string
    photos: { small: string, large: string }
    status: string
    followed: boolean
}

export type initialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: string[]
}

