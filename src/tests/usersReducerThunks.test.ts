import {follow, unFollow, UserActions} from "../redux/usersReducer";
import {usersAPI} from "../Api";
import {APIResponseType} from "../Api/types";
import {ResultCodesEnum} from "../Api/enums";

jest.mock("../Api/usersAPI")
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
    dispatchMock.mockClear()
    getStateMock.mockClear()
    usersAPIMock.follow.mockClear()
    usersAPIMock.unfollow.mockClear()
})

const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {},
}

const followId: string = "1"

test("success follow thunk", async () => {

    usersAPIMock.follow.mockReturnValue(Promise.resolve(result))

    const thunk = follow(followId)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, UserActions.toggleFollowingProgress(true, followId))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, UserActions.followSuccess(followId))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, UserActions.toggleFollowingProgress(false, followId))
})

test("success unfollow thunk", async () => {

    usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

    const thunk = unFollow(followId)

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, UserActions.toggleFollowingProgress(true, followId))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, UserActions.unfollowSuccess(followId))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, UserActions.toggleFollowingProgress(false, followId))
})
