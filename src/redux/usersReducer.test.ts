import {initialStateType, UserActions, usersReducer, UserType} from "./usersReducer";

let state: initialStateType

beforeEach(() => {
    state = {
        users: [
            {id: "0", name: "Oleg 0", followed: false, photos: {small: null, large: null}, status: "status 0"},
            {id: "1", name: "Oleg 1", followed: false, photos: {small: null, large: null}, status: "status 0"},
            {id: "2", name: "Oleg 2", followed: true, photos: {small: null, large: null}, status: "status 0"},
            {id: "3", name: "Oleg 3", followed: true, photos: {small: null, large: null}, status: "status 0"},
        ] as UserType[],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [] as string[],
    }
})

test("follow success", () => {

    const newState = usersReducer(state, UserActions.followSuccess("1"))

    expect(newState.users[1].followed).toBeTruthy()
    expect(newState.users[0].followed).toBeFalsy()
})

test("unfollow success", () => {

    const newState = usersReducer(state, UserActions.unfollowSuccess("3"))

    expect(newState.users[3].followed).toBeFalsy()
    expect(newState.users[2].followed).toBeTruthy()
})