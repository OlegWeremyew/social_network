import React from 'react';
import style from "./Header.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useLocation} from "react-router-dom";

import logo from "../../assets/images/header/logo.png"
import exit from "../../assets/images/header/exit.png"
import avatarDefault from '../../assets/images/user.png'
import loginImage from "../../assets/images/login/login.png"

import {Nullable} from "../../types/Nullable";
import {logout} from "../../redux/authReducer";
import {getAuthDataLoginSelector, getAuthIsAuthSelector} from "../../selectors/authSelectors";
import {Undetectable} from "../../types/Undetectable";
import {getProfilePageProfilePhotosLargeSelector} from "../../selectors/profileSelectors";
import {Clock} from "../../common/Clock/Clock";
import {ReturnComponentType} from "../../types/ReturnComponentType";
import {PATH} from "../../enums";

const Header = (): ReturnComponentType => {

    const dispatch = useDispatch()

    const isAuth: boolean = useSelector(getAuthIsAuthSelector)
    const login: Nullable<string> = useSelector(getAuthDataLoginSelector)
    const userAvatar: Nullable<Undetectable<string>> = useSelector(getProfilePageProfilePhotosLargeSelector)

    const logoutHandler = (): void => {
        dispatch(logout())
    }

    const HeaderView = (): string => {
        return useLocation().pathname.substring(1)
    }

    return (
        <header className={style.header}>

            <div className={style.headerInformBlock}>
                <img
                    className={style.header__logo}
                    src={logo}
                    alt='logo'
                    title="image logo"
                />
                <div className={style.headerClock}>
                    <Clock/>
                </div>
            </div>

            <div className={style.header__loginBlock}>
                {
                    isAuth
                        ? (
                            <div className={style.login__item}>
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
                                    <div className={style.login__exitBlock}>
                                        <img
                                            onClick={logoutHandler}
                                            className={style.exitIcon}
                                            src={exit}
                                            alt="exit"
                                            title="exit"
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <NavLink to={PATH.LOGIN}>
                                <div className={style.login__btn}>
                                    <img
                                        className={style.login__image}
                                        src={loginImage}
                                        alt="login"
                                        title="login"
                                    />
                                </div>
                            </NavLink>
                        )
                }

            </div>

        </header>
    )
}

export default Header
