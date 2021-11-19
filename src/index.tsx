import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {PostMessageType} from "./components/MainWindow/Profile/MyPosts/Post/Post";
import {MessageType, UsersType} from "./components/MainWindow/Messages/Messages";
import state from "./redux/state";


ReactDOM.render(
    <BrowserRouter>
    <App state={state}/>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
