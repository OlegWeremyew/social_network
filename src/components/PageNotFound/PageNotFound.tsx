import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import style from './PageNotFound.module.scss';

const PageNotFound = (): ReturnComponentType => (
  <section className={style.notFound__page}>
    <h1 className={style.title}>404. Page not found</h1>
  </section>
);

export default PageNotFound;
