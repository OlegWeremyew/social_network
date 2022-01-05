import React from 'react';
import c from"./Header.module.css"
import logo from "../../assets/images/logo.png"

const Header = () => {
    return(
        <header className={c.header}>
        <img src={logo} alt='logo' title="image logo"/>
        </header>
    );
}

export default Header;