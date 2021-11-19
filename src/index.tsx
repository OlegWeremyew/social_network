import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {PostMessageType} from "./components/MainWindow/Profile/MyPosts/Post/Post";
import {MessageType, UsersType} from "./components/MainWindow/Messages/Messages";

export type AppType = {
    posts: Array<PostMessageType>
    users: Array<UsersType>
    messages: Array<MessageType>
}

let posts: Array<PostMessageType> = [
    {message: "Hello", likesCount: 12, id: 1},
    {message: "Dinosaurus are great", likesCount: 17, id: 2}
]
let users: Array<UsersType> = [
    {name: "Oleg", id: 1},
    {name: "Diana", id: 2},
    {name: "Fat cat", id: 2},
    {name: "Dimka", id: 4},
    {name: "Homka", id: 5},
    {name: "Belka", id: 6},
]
let messages: Array<MessageType> = [
    {message: "Hi", id: 1},
    {message: "Ho", id: 2},
    {message: "He", id: 3},
    {message: "Hu", id: 4},
    {message: "Hio", id: 5},
    {message: "Hia", id: 6},
]

ReactDOM.render(
    <BrowserRouter>
    <App posts={posts} users={users} messages={messages}/>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
