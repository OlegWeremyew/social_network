import {follow, unFollow, UserActions} from "../redux/usersReducer";
import {usersAPI} from "../Api/usersAPI";
import {APIResponseType, ResultCodesEnum} from "../Api/api";

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

test("success follow thunk", async () => {

    usersAPIMock.follow.mockReturnValue(Promise.resolve(result))

    const thunk = follow("1")

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, UserActions.toggleFollowingProgress(true, "1"))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, UserActions.followSuccess("1"))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, UserActions.toggleFollowingProgress(false, "1"))
})

test("success unfollow thunk", async () => {

    usersAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

    const thunk = unFollow("1")

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, UserActions.toggleFollowingProgress(true, "1"))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, UserActions.unfollowSuccess("1"))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, UserActions.toggleFollowingProgress(false, "1"))
})
