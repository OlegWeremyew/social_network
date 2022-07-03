import React, { FC } from 'react';

import style from './PageNotFound.module.scss';

export const PageNotFound: FC = () => (
  <section className={style.notFound__page}>
    <h1 className={style.title}>404. Page not found</h1>
  </section>
);
