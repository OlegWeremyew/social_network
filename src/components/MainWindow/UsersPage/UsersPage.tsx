import React, { FC } from 'react';

import { useSelector } from 'react-redux';

import { Preloader } from '../../../common';
import { getIsFetching } from '../../../selectors';

import { Users } from './Users';
import style from './UsersPage.module.scss';

const UsersPage: FC = () => {
  const isFetching = useSelector(getIsFetching);

  return (
    <section className={style.page}>
      {isFetching ? <Preloader /> : null}
      <Users />
    </section>
  );
};

export default UsersPage;
