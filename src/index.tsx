import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {RootStateType} from "./redux/store";
import {store} from "./redux/reduxStore";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";

let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

