import {ActionTypes} from "./store";

export type usersType = {
    id: number,
    followed: boolean,
    fullName: string,
    status:  string,
    location: locationType
}

export type locationType = {
    city: string,
    country: string
}

const initialState = {
    users: [
/*        {
            id: 1,
            followed: false,
            fullName: "Oleg",
            status: "i bacame frontend-devoloper!",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            followed: true,
            fullName: "Diana",
            status: "i am 'Jinka' Olega",
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 3,
            followed: false,
            fullName: "Cavin",
            status: "i want to sleep",
            location: {city: "Toronto", country: "Canada"}
        },
        {id: 4, followed: true, fullName: "Sahra", status: "great idea", location: {city: "LA", country: "USA"}},*/
    ] as Array<usersType>,
}

export type initialStateType = typeof initialState

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
                ...state, users: [...state.users, action.users]
            }
        }
        default:
            return state
    }
}



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
export const setUsersAC = (users: usersType) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}