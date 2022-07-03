import { lazy } from 'react';

export const DialogsContainer = lazy(() =>
  import('components/MainWindow').then(tm => ({
    default: tm.DialogsContainer,
  })),
);
export const ProfileContainer = lazy(() =>
  import('components/MainWindow').then(tm => ({
    default: tm.ProfileContainer,
  })),
);
export const UsersPage = lazy(() =>
  import('components/MainWindow').then(tm => ({
    default: tm.UsersPage,
  })),
);
export const Login = lazy(() =>
  import('components/Login').then(tm => ({
    default: tm.Login,
  })),
);
export const ChatPage = lazy(() =>
  import('pages').then(tm => ({
    default: tm.ChatPage,
  })),
);
export const News = lazy(() =>
  import('components/MainWindow').then(tm => ({
    default: tm.News,
  })),
);
export const PageNotFound = lazy(() =>
  import('components/PageNotFound').then(tm => ({
    default: tm.PageNotFound,
  })),
);
