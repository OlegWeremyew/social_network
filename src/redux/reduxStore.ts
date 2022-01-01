import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {sidebarReducer} from "./sidebarPageReducer";
import {usersReducer} from "./usersReducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)