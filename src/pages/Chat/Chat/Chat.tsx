import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { AddMessageForm } from './AddMessageForm';
import style from './Chat.module.scss';
import { Messages } from './Messages';

import { startMessagesListening, stopMessagesListening } from 'redux/chatReducer';
import { getChatStatusSelector } from 'selectors';

export const Chat: FC = () => {
  const dispatch = useDispatch();

  const status = useSelector(getChatStatusSelector);

  useEffect(() => {
    dispatch(startMessagesListening());
    return () => {
      dispatch(stopMessagesListening());
    };
  }, [dispatch]);

  return (
    <>
      {status === 'error' && <div>Some error occurred. Please refresh this page</div>}
      <div className={style.chatBlock}>
        <Messages />
        <AddMessageForm />
      </div>
    </>
  );
};
