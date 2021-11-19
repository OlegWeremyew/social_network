import React from 'react';
import c from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/MainWindow/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Messages, {MessageType, UsersType} from "./components/MainWindow/Messages/Messages";
import {Route, Routes} from "react-router-dom";
import News from "./components/MainWindow/News/News";
import Music from "./components/MainWindow/Music/Music";
import Friends from "./components/MainWindow/Friends/Friends";
import Settings from "./components/MainWindow/Settings/Settings";
import {PostMessageType} from "./components/MainWindow/Profile/MyPosts/Post/Post";

function App() {

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

    return (
        <main className={c.appContent}>
            <Header/>
            <Navbar/>
            <div className={c.appContentWindow}>
                <Routes>
                    <Route path="/profile/*" element={<Profile posts={posts} />}/>
                    <Route path="/messages/*" element={<Messages users={users} messages={messages}/>}/>
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
