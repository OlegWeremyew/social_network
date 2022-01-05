import {PostType} from "./profileReducer";
import React from "react";

/*
export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {city: string, country: string}
}
*/


/*const initialState: initialStateType = {
    users: [],
}*/

/*export type initialStateType = {
    users: Array<UserType>
}*/

const initialState: initialStateType = {
    users: [],
/*    totalCount: 16669,
    error: null,*/
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {small: any, large: any}
    status: string
    followed: boolean
}

export type initialStateType = {
    users: Array<UserType>
/*    totalCount: number
    error: any*/
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
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}


type ActionTypes = followACType | unFollowACType | setUsersACType

export type followACType = ReturnType<typeof followAC>
export const followAC = (userID: number) => {
    return {
        type: "FOLLOW",
        userID: userID,
    } as const
}

export type unFollowACType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userID: number) => {
    return {
        type: "UNFOLLOW",
        userID: userID,
    } as const
}

export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}