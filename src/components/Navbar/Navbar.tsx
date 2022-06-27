import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import style from './Navbar.module.scss';

import { EMPTY_STRING } from 'constants/variables';
import { PATH } from 'enums';

export const Navbar: FC = () => (
  <nav className={style.nav}>
    <div className={style.nav__block}>
      <div className={style.item}>
        <NavLink
          className={navData => (navData.isActive ? style.activeLink : EMPTY_STRING)}
          to={PATH.PROFILE}
        >
          <span className={style.nav__text}>Profile</span>
        </NavLink>
      </div>

      <div className={`${style.item} ${style.active}`}>
        <NavLink
          className={navData => (navData.isActive ? style.activeLink : EMPTY_STRING)}
          to={PATH.DIALOGS}
        >
          <span className={style.nav__text}>Dialogs</span>
        </NavLink>
      </div>

      <div className={`${style.item} ${style.active}`}>
        <NavLink
          className={navData => (navData.isActive ? style.activeLink : EMPTY_STRING)}
          to={PATH.USERS}
        >
          <span className={style.nav__text}>Users</span>
        </NavLink>
      </div>

      <div className={style.item}>
        <NavLink
          className={navData => (navData.isActive ? style.activeLink : EMPTY_STRING)}
          to={PATH.CHAT}
        >
          <span className={style.nav__text}>Chat</span>
        </NavLink>
      </div>

      <div className={style.item}>
        <NavLink
          className={navData => (navData.isActive ? style.activeLink : EMPTY_STRING)}
          to={PATH.NEWS}
        >
          <span className={style.nav__text}>News</span>
        </NavLink>
      </div>
    </div>
  </nav>
);
