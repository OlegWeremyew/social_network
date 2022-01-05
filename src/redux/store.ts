import { profileReducer} from "./profileReducer";
import { messagesReducer} from "./messagesReducer";
import {sidebarReducer} from "./sidebarPageReducer";

//types ===================================================================

type PostType = {
    message: string
    likesCount: number
    id: number
}
type MessageType = {
    message: string
    id: number
}
type UserType = {
    name: string
    id: number
    img: string
}
type UsersLocationType = {
    city: string,
    country: string
}
type usersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status:  string
    location: UsersLocationType
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
export type sidebarType = any
type usersPageType = {
    users: Array<usersType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: sidebarType
    usersPage: usersPageType
}

export type SubscribeType = (state: RootStateType) => void

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void

    getState: () => RootStateType
    subscribe: (observer: SubscribeType) => void

    dispatch: (action: any) => void
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
        },
        sidebar: {},
        usersPage: {
            users: [
                {
                    id: 1,
                    photoUrl: "data:image/jpeg;base64,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",
                    followed: false,
                    fullName: "Oleg",
                    status: "i bacame frontend-devoloper!",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 2,
                    photoUrl: "data:image/jpeg;base64,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",
                    followed: true,
                    fullName: "Diana",
                    status: "i am 'Jinka' Olega",
                    location: {city: "Minsk", country: "Belarus"}
                },
                {
                    id: 3,
                    photoUrl: "data:image/jpeg;base64,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",
                    followed: false,
                    fullName: "Cavin",
                    status: "i want to sleep",
                    location: {city: "Toronto", country: "Canada"}
                },
                {
                    id: 4,
                    photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZ437JiEsGq8Id1ZBtn2t0JV88bHevm2SNA&usqp=CAU",
                    followed: true,
                    fullName: "Sahra",
                    status: "great idea",
                    location: {city: "LA", country: "USA"}
                },
            ]
        }
    },
    _callSubscriber: (state: RootStateType) => {
        console.log("state changed")
    }, //у димыча onChange называется

    getState() {
        return this._state
    },
    subscribe(observer: SubscribeType) {
        this._callSubscriber = observer // наблюдатель //у димыча callback называется
    },

    dispatch(action: any) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer({}, action)

        this._callSubscriber(this._state)

    }

}
