
export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {city: string, country: string}
}

const initialState: initialStateType = {
    users: []
}

/*type itemsType = {
    name: string
    id: number
    uniqueUrlName: any
    photos: {small: any, large: any}
    status: any
    followed: boolean
}*/

export type initialStateType = {
    users: Array<UserType>
}

/*export type initialStateType = {
    items: Array<itemsType>
    totalCount: any
    error: string
}*/

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