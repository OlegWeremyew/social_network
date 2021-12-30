import {ActionTypes, PostType, ProfilePageType} from "./state";

const initialState = {}

export const profileReducer = (state: ProfilePageType, action: ActionTypes): ProfilePageType => {

    switch (action.type) {
        case "ADD_POST": {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 12
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        }

        case "UPDATE_NEW_POST_TEXT": {
            state.newPostText = action.newText
            return state
        }
        default:
            return state
    }

}

/*type ActionType = addPostCreatorType | updateNewPostTextCreatorType*/

export type addPostCreatorType = ReturnType<typeof addPostCreator>
export const addPostCreator = (newText: string) => {
    return {
        type: "ADD_POST",
        newText: newText
    } as const
}
export type updateNewPostTextCreatorType = ReturnType<typeof updateNewPostTextCreator>
export const updateNewPostTextCreator = (newText: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: newText
    } as const
}

