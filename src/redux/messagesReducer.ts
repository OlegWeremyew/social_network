const ADD_MESSAGE = "SOCIAL_NETWORK/MESSAGES/ADD_MESSAGE"

const initialState = {
    users: [
        {
            name: "Oleg",
            id: 1,
            img: "https://avatars.mds.yandex.net/get-zen_doc/3986249/pub_607ecd1d13c71c1ca8a34192_607ee065330a4f14d551104b/scale_1200"
        },
        {
            name: "Diana",
            id: 2,
            img: "https://avatars.mds.yandex.net/i?id=64b380ea3aa0d80cad94cb1a24a3b3f5-4233014-images-thumbs&ref=rim&n=33&w=150&h=150"
        },
        {name: "Fat cat", id: 3, img: "https://data.whicdn.com/images/310252363/original.jpg"},
        {
            name: "Dimka",
            id: 4,
            img: "https://i.pinimg.com/originals/b7/44/46/b744464dd3d970ad96745be8de69d755.jpg"
        },
        {
            name: "Ella",
            id: 5,
            img: "https://st.depositphotos.com/1023162/5099/i/950/depositphotos_50991807-stock-photo-sexy-woman-in-fashion-sunglasses.jpg"
        },
        {
            name: "Makar",
            id: 6,
            img: "https://avatars.mds.yandex.net/i?id=55d09aa1629f72a149098b2c3127e039-5222024-images-thumbs&ref=rim&n=33&w=150&h=150"
        },
    ] as Array<UserType>,
    messages: [
        {message: "Hi", id: 1},
        {message: "Ho", id: 2},
        {message: "He", id: 3},
        {message: "Hu", id: 4},
        {message: "Hio", id: 5},
        {message: "Hia", id: 6},
    ] as Array<MessageType>,
}

export type initialStateType = typeof initialState

export const messagesReducer = (state: initialStateType = initialState, action: ActionMessageTypes): initialStateType => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.payload.newMessageText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        }
        default:
            return state
    }
}

export type addMessageCreatorType = ReturnType<typeof addMessageCreator>
export const addMessageCreator = (newMessageText: string) => {
    return {
        type: ADD_MESSAGE,
        payload: {
            newMessageText,
        }
    } as const
}

//Types ======================================

export type ActionMessageTypes = addMessageCreatorType

export type UserType = {
    name: string
    id: number
    img: string
}

export type MessageType = {
    message: string
    id: number
}