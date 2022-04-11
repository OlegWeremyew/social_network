import React from 'react';
import style from "./Header.module.css"
import logo from "../../assets/images/header/logo.png"
import exit from "../../assets/images/header/exit.png"
import {NavLink, useLocation} from "react-router-dom";
import {Nullable} from "../../types/Nullable";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {logout} from "../../redux/authReducer";
import avatarDefault from '../../assets/images/user.png'

const Header = () => {

    const dispatch = useDispatch()

    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const login = useSelector<AppStateType, Nullable<string>>(state => state.auth.data.login)
    const userAvatar = useSelector<AppStateType, any>(state => state.profilePage.profile?.photos.large)

    const logoutHandler = () => {
        dispatch(logout())
    }

    const HeaderView = () => {
        return useLocation().pathname.substring(1)
    }

    return (
        <header className={style.header}>
            <img className={style.header__logo} src={logo} alt='logo' title="image logo"/>
            <div className={style.header__loginBlock}>
                {
                    isAuth
                        ? <div className={style.login__item}>
                            <div className={style.location}>
                                {HeaderView()}
                            </div>
                            <div className={style.login__information}>
                                <img
                                    className={style.login__avatarPhoto}
                                    alt='avatar'
                                    src={userAvatar ? userAvatar : avatarDefault}/>
                                <div className={style.login__userName}>
                                    {login}
                                </div>
                                <div  className={style.login__exitBlock}>
                                    <img onClick={logoutHandler} className={style.exitIcon} src={exit} alt="exit"/>
                                </div>
                            </div>
                        </div>
                        : <NavLink to={'/login'}>
                            <div>
                                Login
                            </div>
                        </NavLink>
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