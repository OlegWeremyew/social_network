import React, { FC } from 'react';

import { Helmet } from 'react-helmet';

import { Chat } from './Chat';
import style from './ChatPage.module.scss';

export const ChatPage: FC = () => (
  <section className={style.chatPageBlock}>
    <Helmet>
      <title>Chat</title>
      <meta
        name="description"
        content="page for live conversation with friends and other people"
      />
      <meta name="keywords" content="chat, conversation, friends, messages" />
    </Helmet>
    <div className={style.chatPage__title}>Common chat</div>
    <Chat />
  </section>
);
