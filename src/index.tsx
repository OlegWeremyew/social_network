import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state, { subscribe } from "./redux/state";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {updateNewMessageText, updateNewPostText, addMessage, addPost, RootStateType} from "./redux/state";

let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>

            <App
                state={state}
                addPost={addPost}
                addMessage={addMessage}
                updateNewPostText={updateNewPostText}
                updateNewMessageText={updateNewMessageText}
            />

        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)

