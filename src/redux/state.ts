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
}
export type ProfilePageType = {
    posts: Array<PostType>
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
        ]
    },
    messagesPage: {
        users: [
            {name: "Oleg", id: 1},
            {name: "Diana", id: 2},
            {name: "Fat cat", id: 2},
            {name: "Dimka", id: 4},
            {name: "Homka", id: 5},
            {name: "Belka", id: 6},
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

export default state;