import React from 'react';
import c from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/MainWindow/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Messages from "./components/MainWindow/Messages/Messages";
import {Route, Routes} from "react-router-dom";
import News from "./components/MainWindow/News/News";
import Music from "./components/MainWindow/Music/Music";
import Friends from "./components/MainWindow/Friends/Friends";
import Settings from "./components/MainWindow/Settings/Settings";

function App() {

    return (
        <main className={c.appContent}>
            <Header/>
            <Navbar/>
            <div className={c.appContentWindow}>
                <Routes>
                    <Route path="/profile/*" element={<Profile />}/>
                    <Route path="/messages/*" element={<Messages/>}/>
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
