import {ActionTypes} from "./store";

export type PostType = {
    message: string
    likesCount: number
    id: number
}

const initialState = {
    posts: [
        {message: "Hello", likesCount: 12, id: 1},
        {message: "Dinosaurus are great", likesCount: 17, id: 2}
    ] as Array<PostType>,
    newPostText: "" as string
}
export type initialStateType = typeof initialState

export const profileReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {

    switch (action.type) {
        case "ADD_POST": {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 12
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ""
            return stateCopy
        }

        case "UPDATE_NEW_POST_TEXT": {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }

}

export type addPostCreatorType = ReturnType<typeof addPostCreator>
export const addPostCreator = () => {
    return {
        type: "ADD_POST",
    } as const
}
export type updateNewPostTextCreatorType = ReturnType<typeof updateNewPostTextCreator>
export const updateNewPostTextCreator = (newText: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: newText
    } as const
}

