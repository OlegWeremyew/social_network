import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Footer, Header, Navbar } from '../../index';

import style from './App.module.scss';
import {
  ChatPage,
  DialogsContainer,
  Login,
  News,
  PageNotFound,
  ProfileContainer,
  UsersPage,
} from './lazyComponents';

import { Preloader } from 'common';
import { PATH } from 'enums';
import { initializeApp } from 'redux/AppReducer';
import { getInitializedAppSelector } from 'selectors';

export const App: FC = () => {
  const dispatch = useDispatch();
  const initialized = useSelector(getInitializedAppSelector);

  useEffect(() => {
    dispatch(initializeApp());
  });

  if (!initialized) {
    return <Preloader />;
  }

  return (
    <main className={style.appContent}>
      <Header />
      <Navbar />
      <div className={style.appContentWindow}>
        <Routes>
          <Route path={PATH.MAIN_PAGE} element={<Navigate to={PATH.PROFILE} />} />

          <Route path={PATH.PROFILE} element={<ProfileContainer />}>
            <Route path=":userId" element={<ProfileContainer />} />
          </Route>

          <Route path={PATH.DIALOGS} element={<DialogsContainer />}>
            <Route path=":userId" element={<DialogsContainer />} />
          </Route>

          <Route path={PATH.USERS} element={<UsersPage />} />
          <Route path={PATH.NEWS} element={<News />} />
          <Route path={PATH.LOGIN} element={<Login />} />
          <Route path={PATH.CHAT} element={<ChatPage />} />
          <Route path={PATH.PAGE_NOTE_FOUND} element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
};
