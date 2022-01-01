import React from 'react';
import c from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink className={ (navData) => navData.isActive? c.activeLink: ""} to="/profile">Profile</NavLink>
            </div>
            <div className={ `${c.item} ${c.active}` }>
                <NavLink className={ (navData) => navData.isActive? c.activeLink: ""} to="/messages">Message</NavLink>
            </div>
            <div className={ `${c.item} ${c.active}` }>
                <NavLink className={ (navData) => navData.isActive? c.activeLink: ""} to="/users">Users</NavLink>
            </div>
            <div className={c.item}>
                <NavLink className={ (navData) => navData.isActive? c.activeLink: ""} to="/news">News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink className={ (navData) => navData.isActive? c.activeLink: ""} to="/music">Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink className={ (navData) => navData.isActive? c.activeLink: ""} to="/settings">Settings</NavLink>
            </div>
            <div className={c.item}>
                <NavLink className={ (navData) => navData.isActive? c.activeLink: ""} to="/friends">Friends</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;