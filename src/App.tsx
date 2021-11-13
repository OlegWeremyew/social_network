import React from 'react';
import c from'./App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/MainWindow/Profile/Profile";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <main className={c.appContent}>
            <Header/>
            <Navbar/>
            <div>
                <Profile/>
            </div>
            <Footer/>
        </main>
    );
}


export default App;
