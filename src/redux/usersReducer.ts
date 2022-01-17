import {PostType} from "./profileReducer";
import React from "react";

const initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: { small: any, large: any }
    status: string
    followed: boolean
}

export type initialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


export const usersReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(m => m.id === action.userID ? {...m, followed: true} : m)
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(m => m.id === action.userID ? {...m, followed: false} : m)
            }
        }
        case "SET-USERS": {
            return {
                ...state, users: [...action.users]
            }
        }
        case "SET-CURRENT-PAGE": {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case "TOGGLE-IS-FETCHING": {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}


type ActionTypes = followType
    | unFollowType
    | setUsersType
    | setCurrentPageType
    | setTotalUsersCountType
    | setIsFetchingType

export type followType = ReturnType<typeof follow>
export const follow = (userID: number) => {
    return {
        type: "FOLLOW",
        userID: userID,
    } as const
}

export type unFollowType = ReturnType<typeof unFollow>
export const unFollow = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID: userID,
    } as const
}

export type setUsersType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users: users,
    } as const
}

export type setCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage: currentPage,
    } as const
}

export type setTotalUsersCountType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        count: totalCount,
    } as const
}

export type setIsFetchingType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching: isFetching,
    } as const
}