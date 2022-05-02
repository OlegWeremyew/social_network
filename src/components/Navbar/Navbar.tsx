import React from 'react';
import style from "./Navbar.module.scss"
import {NavLink} from "react-router-dom";
import {PATH} from "../../enums";
import {ReturnComponentType} from "../../types/ReturnComponentType";

const Navbar = (): ReturnComponentType => {
    return (
        <nav className={style.nav}>
            <div className={style.nav__block}>

                <div className={style.item}>
                    <NavLink className={(navData) => navData.isActive ? style.activeLink : ""} to={PATH.PROFILE}>
                       <span className={style.nav__text}>
                           Profile
                       </span>
                    </NavLink>
                </div>

                <div className={`${style.item} ${style.active}`}>
                    <NavLink className={(navData) => navData.isActive ? style.activeLink : ""} to={PATH.DIALOGS}>
                        <span className={style.nav__text}>
                        Dialogs
                        </span>
                    </NavLink>
                </div>

                <div className={`${style.item} ${style.active}`}>
                    <NavLink className={(navData) => navData.isActive ? style.activeLink : ""} to={PATH.USERS}>
                        <span className={style.nav__text}>
                        Users
                         </span>
                    </NavLink>
                </div>

                <div className={style.item}>
                    <NavLink className={(navData) => navData.isActive ? style.activeLink : ""} to={PATH.CHAT}>
                        <span className={style.nav__text}>
                        Chat
                        </span>
                    </NavLink>
                </div>

                <div className={style.item}>
                    <NavLink className={(navData) => navData.isActive ? style.activeLink : ""} to={PATH.NEWS}>
                        <span className={style.nav__text}>
                        News
                        </span>
                    </NavLink>
                </div>

            </div>
        </nav>
    )
}

export default Navbar