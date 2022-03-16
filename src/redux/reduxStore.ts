import {applyMiddleware, combineReducers, createStore} from "redux";
import {ActionProfileTypes, profileReducer} from "./profileReducer";
import {ActionMessageTypes, messagesReducer} from "./messagesReducer";
import {sidebarReducer} from "./sidebarPageReducer";
import {ActionUsersTypes, usersReducer} from "./usersReducer";
import {ActionAuthReducerType, authReducer} from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import {ActionAppReducerType, appReducer} from "./AppReducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

export type ActionAllType = ActionProfileTypes
    | ActionMessageTypes
    | ActionUsersTypes
    | ActionAuthReducerType
    | ActionAppReducerType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionAllType>

//@ts-ignore
window.store = store