import React, { FC } from 'react';

import { Chat } from './Chat';
import style from './ChatPage.module.scss';

export const ChatPage: FC = () => (
  <section className={style.chatPageBlock}>
    <div className={style.chatPage__title}>Common chat</div>
    <Chat />
  </section>
);
