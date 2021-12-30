import {ActionTypes, MessagesPageType, MessageType} from "./state";

const initialState = {}

export const messagesReducer = (state: MessagesPageType, action: ActionTypes): MessagesPageType => {

    switch (action.type) {
        case "ADD_MESSAGE": {
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state
        }
        case "UPDATE_NEW_MESSAGE_TEXT": {
            state.newMessageText = action.newMessage
            return state
        }
        default:
            return state
    }
}

/*type ActionType = addMessageCreatorType | onMessagePostCreatorType*/

export type addMessageCreatorType = ReturnType<typeof addMessageCreator>
export const addMessageCreator = (newMessage: string) => {
    return {
        type: "ADD_MESSAGE",
        newMessage: newMessage
    } as const
}
export type onMessagePostCreatorType = ReturnType<typeof onMessagePostCreator>
export const onMessagePostCreator = (newMessage: string) => {
    return {
        type: "UPDATE_NEW_MESSAGE_TEXT",
        newMessage: newMessage
    } as const
}


