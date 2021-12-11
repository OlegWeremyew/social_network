import React from 'react';
import c from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import News from "./components/MainWindow/News/News";
import Music from "./components/MainWindow/Music/Music";
import Friends from "./components/MainWindow/Friends/Friends";
import Settings from "./components/MainWindow/Settings/Settings";
import Messages from "./components/MainWindow/Messages/Messages";
import Profile from "./components/MainWindow/Profile/Profile";
import {RootStateType, StoreType} from "./redux/state";

type AppStateType = {
    store: StoreType
}

function App(props: AppStateType) {

    const state = props.store._state

    return (
        <main className={c.appContent}>
            <Header/>
            <Navbar/>
            <div className={c.appContentWindow}>
                <Routes>

                    <Route path="/profile/*" element={
                               <Profile
                                   profilePage={state.profilePage}
                                   addPost={props.store.addPost.bind(props.store)}
                                   updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                               />}/>

                    *<Route path="/messages/*" element={
                               <Messages
                                   state={state.messagesPage}
                                   addMessage={props.store.addMessage.bind(props.store)}
                                   updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
                               />}/>*

                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/settings/*" element={<Settings/>}/>
                    <Route path="/friends/*" element={<Friends/>}/>

                </Routes>
            </div>
            <Footer/>
        </main>
    );
}


export default App;
