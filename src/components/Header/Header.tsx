import React, { FC } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import style from './Header.module.scss';

import exit from 'assets/images/header/exit.png';
import logo from 'assets/images/header/logo.png';
import loginImage from 'assets/images/login/login.png';
import avatarDefault from 'assets/images/user.png';
import { Clock } from 'common';
import { PATH } from 'enums';
import { logout } from 'redux/authReducer';
import {
  getAuthDataLoginSelector,
  getAuthIsAuthSelector,
  getProfilePageProfilePhotosLargeSelector,
} from 'selectors';

export const Header: FC = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(getAuthIsAuthSelector);
  const login = useSelector(getAuthDataLoginSelector);
  const userAvatar = useSelector(getProfilePageProfilePhotosLargeSelector);

  const logoutHandler = (): void => {
    dispatch(logout());
  };

  const HeaderView = (): string => useLocation().pathname.substring(1);

  return (
    <header className={style.header}>
      <div className={style.headerInformBlock}>
        <img className={style.header__logo} src={logo} alt="logo" title="image logo" />
        <div className={style.headerClock}>
          <Clock />
        </div>
      </div>

      <div className={style.header__loginBlock}>
        {isAuth ? (
          <div className={style.login__item}>
            <div className={style.location}>{HeaderView()}</div>
            <div className={style.login__information}>
              <img
                className={style.login__avatarPhoto}
                alt="avatar"
                src={userAvatar || avatarDefault}
              />
              <div className={style.login__userName}>{login}</div>
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
        )}
      </div>
    </header>
  );
};
