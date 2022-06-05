import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Preloader } from '../../../common';
import { PATH } from '../../../enums';
import { initializeApp } from '../../../redux/AppReducer';
import { getInitializedAppSelector } from '../../../selectors';
import { ReturnComponentType } from '../../../types/ReturnComponentType';
import { Footer, Header, Navbar } from '../../index';
import PageNotFound from '../../PageNotFound/PageNotFound';

import style from './App.module.scss';

const DialogsContainer = React.lazy(
  () => import('../../MainWindow/DialogsContainer/DialogsContainer'),
);
const ProfileContainer = React.lazy(
  () => import('../../MainWindow/ProfileContainer/ProfileContainer'),
);
const UsersPage = React.lazy(() => import('../../MainWindow/UsersPage/UsersPage'));
const Login = React.lazy(() => import('../../Login/Login'));
const ChatPage = React.lazy(() => import('../../../pages/Chat/ChatPage'));
const News = React.lazy(() => import('../../MainWindow/News/News'));

export const App = (): ReturnComponentType => {
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
