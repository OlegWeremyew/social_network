import React, { FC, memo } from 'react';

import { NavLink } from 'react-router-dom';

import style from './Message.module.css';
import { MessageType } from './types';

import { PATH } from 'enums';

export const Message: FC<MessageType> = memo(({ message }) => {
  const navLinkPath = `${PATH.PROFILE}/${message.userId}`;

  return (
    <>
      <div className={style.message}>
        <div className={style.message__item}>
          <NavLink to={navLinkPath}>
            <img className={style.message__img} src={message.photo} alt="avatar" />
          </NavLink>
          <div className={style.message__userName}>{message.userName}</div>
          <br />
        </div>
        <div className={style.message__text}>{message.message}</div>
      </div>
      <hr />
    </>
  );
});
