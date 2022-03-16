import {PostType, ProfileActions, profileReducer, ProfileType} from "./profileReducer";

const initialState = {
    posts: [
        {message: "Hello", likesCount: 12, id: 1},
        {message: "Dinosaurs are great", likesCount: 17, id: 2}
    ] as Array<PostType>,
    profile: null as ProfileType,
    status: "",
}

test("length message should been increment", () => {

    let newState = profileReducer(initialState, ProfileActions.addPost("new post"))

    expect(newState.posts.length === 3).toBe(true)

})

test("title message should be correct", () => {

    let newState = profileReducer(initialState, ProfileActions.addPost("new post"))

    expect(newState.posts[2].message).toBe("new post")

})

test("after delete length should be decrement", () => {

    let newState = profileReducer(initialState, ProfileActions.deletePost(2))

    expect(newState.posts.length === 1).toBe(true)

})

test("after delete length should not be decrement", () => {

    let newState = profileReducer(initialState, ProfileActions.deletePost(4))

    expect(newState.posts.length === 1).toBe(false)

})