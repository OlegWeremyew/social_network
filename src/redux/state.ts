
//types ===================================================================

export type ActionTypes = addPostCreaterType
    | udateNewPostTextCreaterType
    | addMessageCreatorType
    | onMessagePostCreatorType


export type PostType = {
    message: string
    likesCount: number
    id: number
}
export type MessageType = {
    message: string
    id: number
}
export type UserType = {
    name: string
    id: number
    img: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type MessagesPageType = {
    users: Array<UserType>
    messages: Array<MessageType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

export type SubscribeType = (state: RootStateType) => void

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void

    getState: () => RootStateType
    subscribe: (observer: SubscribeType) => void

    /*addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    addMessage: (AddNewMessage: string) => void
    updateNewMessageText: (newMessageText: string) => void*/
    dispatch: (action: any) => void
}

//functions=======================================================================

export type addPostCreaterType = ReturnType<typeof addPostCreater>
export const addPostCreater = () => {
    return {
        type: "ADD_POST"
    } as const
}
export type udateNewPostTextCreaterType = ReturnType<typeof udateNewPostTextCreater>
export const udateNewPostTextCreater = (text: string) => {
    return {
        type: "UPDATE_NEW_POST_TEXT",
        newText: text
    } as const
}
export type addMessageCreatorType = ReturnType<typeof addMessageCreator>
export const addMessageCreator = () => {
    return {
        type: "ADD_MESSAGE"
    } as const
}
export type onMessagePostCreatorType = ReturnType<typeof onMessagePostCreator>
export const onMessagePostCreator = (text: string) =>{
    return {
        type: "UPDATE_NEW_MESSAGE_TEXT",
        newMessage: text
    } as const
}

//store =======================================================================

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {message: "Hello", likesCount: 12, id: 1},
                {message: "Dinosaurus are great", likesCount: 17, id: 2}
            ],
            newPostText: ""
        },
        messagesPage: {
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
            ],
            messages: [
                {message: "Hi", id: 1},
                {message: "Ho", id: 2},
                {message: "He", id: 3},
                {message: "Hu", id: 4},
                {message: "Hio", id: 5},
                {message: "Hia", id: 6},
            ],
            newMessageText: ""
        }
    },
    _callSubscriber: (state: RootStateType) => {
        console.log("state changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer: SubscribeType) {
        this._callSubscriber = observer // наблюдатель
    },
    dispatch(action: ActionTypes) {
        if (action.type === "ADD_POST") {
            let newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 12
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE_NEW_POST_TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === "ADD_MESSAGE") {
            let newMessage: MessageType = {
                id: 5,
                message: this._state.messagesPage.newMessageText,
            }
            this._state.messagesPage.messages.push(newMessage)
            this._state.messagesPage.newMessageText = ""
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE_NEW_MESSAGE_TEXT") {
            this._state.messagesPage.newMessageText = action.newMessage
            this._callSubscriber(this._state)
        }
    }
}
