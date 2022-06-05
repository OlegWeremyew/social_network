import { applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
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

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

