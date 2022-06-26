import React, { FC } from 'react';

import preloader from '../../assets/images/preloader.gif';

import style from './Preloader.module.scss';

export const Preloader: FC = () => (
  <div>
    <img src={preloader} className={style.preloader} alt="preloader" />
  </div>
);
