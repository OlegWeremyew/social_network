import React, { FC } from 'react';

import style from './DialogsItem.module.scss';

import { UserType } from 'redux/messagesReducer/types';

export const DialogsItem: FC<UserType> = ({ img, name }) => (
  <div className={style.dialog}>
    <div>
      <img src={img} alt="dialogs item" />
    </div>
    <div className={style.dialog__name}>{name}</div>
  </div>
);
