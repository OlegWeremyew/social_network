import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import {newsReducer} from "./NewsReducer";
import {chatReducer} from "./chatReducer";
import {appReducer} from "./AppReducer";
import {usersReducer} from "./usersReducer";
import {messagesReducer} from "./messagesReducer";
import {profileReducer} from "./profileReducer";
import {authReducer} from "./authReducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    chat: chatReducer,
    news: newsReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType<A extends Action, RT = Promise<void>> = ThunkAction<RT, AppStateType, unknown, A>

//@ts-ignore
window.store = store