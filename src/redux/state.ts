import {rerenderEntireTree} from "../render";

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
    messages: Array<MessageType>
    users: Array<UserType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {message: "Hello", likesCount: 12, id: 1},
            {message: "Dinosaurus are great", likesCount: 17, id: 2}
        ],
        newPostText: "it-camasutra"
    },
    messagesPage: {
        users: [
            {name: "Oleg", id: 1, img: "https://avatars.mds.yandex.net/get-zen_doc/3986249/pub_607ecd1d13c71c1ca8a34192_607ee065330a4f14d551104b/scale_1200"},
            {name: "Diana", id: 2, img: "https://avatars.mds.yandex.net/i?id=64b380ea3aa0d80cad94cb1a24a3b3f5-4233014-images-thumbs&ref=rim&n=33&w=150&h=150"},
            {name: "Fat cat", id: 3, img: "https://data.whicdn.com/images/310252363/original.jpg"},
            {name: "Dimka", id: 4, img: "https://i.pinimg.com/originals/b7/44/46/b744464dd3d970ad96745be8de69d755.jpg"},
            {name: "Ella", id: 5, img: "https://st.depositphotos.com/1023162/5099/i/950/depositphotos_50991807-stock-photo-sexy-woman-in-fashion-sunglasses.jpg"},
            {name: "Makar", id: 6, img: "https://avatars.mds.yandex.net/i?id=55d09aa1629f72a149098b2c3127e039-5222024-images-thumbs&ref=rim&n=33&w=150&h=150"},
        ],
        messages: [
            {message: "Hi", id: 1},
            {message: "Ho", id: 2},
            {message: "He", id: 3},
            {message: "Hu", id: 4},
            {message: "Hio", id: 5},
            {message: "Hia", id: 6},
        ]
    }
}

export let addPost = (postMessage: string) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 12
    }

    state. profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export let addMessage = (AddNewMessage: string) => {
    let newMessage = {
        id: 5,
        message: AddNewMessage,
    }

    state.messagesPage.messages.push(newMessage)
    rerenderEntireTree(state)
}

export default state;