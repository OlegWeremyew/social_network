import React, { FC } from 'react';

import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

import { Users } from './Users';
import style from './UsersPage.module.scss';

import { Preloader } from 'common';
import { getIsFetching } from 'selectors';

export const UsersPage: FC = () => {
  const isFetching = useSelector(getIsFetching);

  return (
    <section className={style.page}>
      <Helmet>
        <title>User</title>
        <meta name="description" content="all site users list" />
        <meta name="keywords" content="users, search, friends" />
      </Helmet>
      {isFetching ? <Preloader /> : null}
      <Users />
    </section>
  );
};
