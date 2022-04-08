import React from 'react';
import c from "./Header.module.css"
import logo from "../../assets/images/logo.png"
import {NavLink} from "react-router-dom";
import {Nullable} from "../../types/Nullable";

const Header = (props: HeaderPropsType) => {

    return (
        <header className={c.header}>
            <img src={logo} alt='logo' title="image logo"/>
            <div className={c.loginBlock}>
                {
                    props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header

//types==========

type HeaderPropsType = {
    isAuth: boolean
    login: Nullable<string>
    logout: () => void
}