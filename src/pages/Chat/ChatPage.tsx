import React, { FC } from 'react';

import { Chat } from './Chat';
import style from './ChatPage.module.scss';

const ChatPage: FC = () => (
  <section className={style.chatPageBlock}>
    <div className={style.chatPage__title}>Common chat</div>
    <Chat />
  </section>
);

export default ChatPage;
