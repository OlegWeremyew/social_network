import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/MainWindow/Profile/Profile";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <main className="app-content">
            <Header/>
            <Navbar/>
            <Profile/>
            <Footer/>
        </main>
    );
}


export default App;
