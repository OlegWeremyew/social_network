import React from 'react';

import { UserType } from '../../../../../redux/messagesReducer/types';
import { ReturnComponentType } from '../../../../../types/ReturnComponentType';

import style from './DialogsItem.module.scss';

export const DialogsItem: React.FC<UserType> = ({ img, name }): ReturnComponentType => (
  <div className={style.dialog}>
    <div>
      <img src={img} alt="dialogs item" />
    </div>
    <div className={style.dialog__name}>{name}</div>
  </div>
);
