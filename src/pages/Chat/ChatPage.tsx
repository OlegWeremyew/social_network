import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import { Chat } from './Chat';
import style from './ChatPage.module.scss';

const ChatPage: React.FC = (): ReturnComponentType => (
  <section className={style.chatPageBlock}>
    <div className={style.chatPage__title}>Common chat</div>
    <Chat />
  </section>
);

export default ChatPage;
