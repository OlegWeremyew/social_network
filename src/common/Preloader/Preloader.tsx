import React from 'react';

import preloader from '../../assets/images/preloader.gif';
import { ReturnComponentType } from '../../types/ReturnComponentType';

import style from './Preloader.module.scss';

export const Preloader = (): ReturnComponentType => (
  <div>
    <img src={preloader} className={style.preloader} alt="preloader" />
  </div>
);
