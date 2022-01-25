import React from 'react';
import c from "./Header.module.css"
import logo from "../../assets/images/logo.png"
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string
}

const Header = (props: HeaderPropsType) => {

    return (
        <header className={c.header}>
            <img src={logo} alt='logo' title="image logo"/>
            <div className={c.loginBlock}>
                {
                    props.isAuth
                        ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;