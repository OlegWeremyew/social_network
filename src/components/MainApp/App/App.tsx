import React, { FC, lazy, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Footer, Header, Navbar } from '../../index';
import PageNotFound from '../../PageNotFound/PageNotFound';

import style from './App.module.scss';

import { Preloader } from 'common';
import { PATH } from 'enums';
import { initializeApp } from 'redux/AppReducer';
import { getInitializedAppSelector } from 'selectors';

const DialogsContainer = lazy(() =>
  import('components/MainWindow/').then(tm => ({
    default: tm.DialogsContainer,
  })),
);
const ProfileContainer = lazy(() =>
  import('components/MainWindow').then(tm => ({
    default: tm.ProfileContainer,
  })),
);
const UsersPage = lazy(() =>
  import('components/MainWindow').then(tm => ({
    default: tm.UsersPage,
  })),
);
const Login = lazy(() =>
  import('components/Login').then(tm => ({
    default: tm.Login,
  })),
);
const ChatPage = lazy(() =>
  import('pages').then(tm => ({
    default: tm.ChatPage,
  })),
);
const News = lazy(() =>
  import('components/MainWindow').then(tm => ({
    default: tm.News,
  })),
);

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
