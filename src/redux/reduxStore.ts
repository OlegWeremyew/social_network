import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionProfileTypes, profileReducer} from "./profileReducer";
import {ActionMessageTypes, messagesReducer} from "./messagesReducer";
import {sidebarReducer} from "./sidebarPageReducer";
import {ActionUsersTypes, usersReducer} from "./usersReducer";
import {ActionAuthReducerType, authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {reducer as formReducer} from "redux-form"

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type ActionAllType = ActionProfileTypes
    | ActionMessageTypes
    | ActionUsersTypes
    | ActionAuthReducerType



export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionAllType>