import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { Users } from './Users';
import style from './UsersPage.module.scss';

import { Preloader } from 'common';
import { getIsFetching } from 'selectors';

export const UsersPage: FC = () => {
  const isFetching = useSelector(getIsFetching);

  return (
    <section className={style.page}>
      {isFetching ? <Preloader /> : null}
      <Users />
    </section>
  );
};
