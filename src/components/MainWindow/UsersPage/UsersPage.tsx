import React from 'react';

import { useSelector } from 'react-redux';

import { Preloader } from '../../../common';
import { getIsFetching } from '../../../selectors';
import { ReturnComponentType } from '../../../types/ReturnComponentType';

import { Users } from './Users';
import style from './UsersPage.module.scss';

const UsersPage = (): ReturnComponentType => {
  const isFetching: boolean = useSelector(getIsFetching);

  return (
    <section className={style.page}>
      {isFetching ? <Preloader /> : null}
      <Users />
    </section>
  );
};

export default UsersPage;
