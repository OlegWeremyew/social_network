import React, { FC } from 'react';

import { useDispatch } from 'react-redux';

import { MessageActions } from '../../../../../redux/messagesReducer';
import { MessageType } from '../../../../../redux/messagesReducer/types';

import style from './Dialog.module.scss';

export const Dialog: FC<MessageType> = ({ message, id }) => {
  const dispatch = useDispatch();

  const deletePostHandler = (id: number): void => {
    dispatch(MessageActions.deleteMessage(id));
  };

  return (
    <div className={style.message}>
      <div className={style.message__item}>{message}</div>
      <div onClick={() => deletePostHandler(id)} className={style.delete__btn}>
        ❌
      </div>
    </div>
  );
};
