import React from 'react';
import c from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.nav__block}>
                <div className={c.item}>
                    <NavLink className={(navData) => navData.isActive ? c.activeLink : ""} to="/profile">
                       <span className={c.nav__text}>
                           Profile
                       </span>
                    </NavLink>
                </div>
                <div className={`${c.item} ${c.active}`}>
                    <NavLink className={(navData) => navData.isActive ? c.activeLink : ""} to="/dialogs">
                        <span className={c.nav__text}>
                        Dialogs
                        </span>
                    </NavLink>
                </div>
                <div className={`${c.item} ${c.active}`}>
                    <NavLink className={(navData) => navData.isActive ? c.activeLink : ""} to="/users">
                        <span className={c.nav__text}>
                        Users
                         </span>
                    </NavLink>
                </div>
                <div className={c.item}>
                    <NavLink className={(navData) => navData.isActive ? c.activeLink : ""} to="/chat">
                        <span className={c.nav__text}>
                        Chat
                        </span>
                    </NavLink>
                </div>
                <div className={c.item}>
                    <NavLink className={(navData) => navData.isActive ? c.activeLink : ""} to="/news">
                        <span className={c.nav__text}>
                        News
                    </span>
                    </NavLink>
                </div>
                <div className={c.item}>
                    <NavLink className={(navData) => navData.isActive ? c.activeLink : ""} to="/music">
                        <span className={c.nav__text}>
                        Music
                        </span>
                    </NavLink>
                </div>
                <div className={c.item}>
                    <NavLink className={(navData) => navData.isActive ? c.activeLink : ""} to="/settings">
                        <span className={c.nav__text}>
                        Settings
                        </span>
                    </NavLink>
                </div>
                <div className={c.item}>
                    <NavLink className={(navData) => navData.isActive ? c.activeLink : ""} to="/friends">
                        <span className={c.nav__text}>
                        Friends
                        </span>
                    </NavLink>
                </div>
            </div>

        </nav>
    )
}

export default Navbar