import React, { FC } from 'react';

import style from './Preloader.module.scss';

import preloader from 'assets/images/preloader.gif';

export const Preloader: FC = () => (
  <div>
    <img src={preloader} className={style.preloader} alt="preloader" />
  </div>
);
