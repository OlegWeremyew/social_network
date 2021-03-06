import React, { FC, useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Message } from './Message';
import style from './Messages.module.scss';

import { ChatMessageType } from 'redux/chatReducer/types';
import { getChatMessagesSelector } from 'selectors';

export const Messages: FC = () => {
  const dispatch = useDispatch();
  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false);

  const messages: ChatMessageType[] = useSelector(getChatMessagesSelector);
  const messagesAnchorRef = useRef<HTMLDivElement>(null);

  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>): void => {
    const element = e.currentTarget;

    if (Math.abs(element.scrollHeight - element.scrollTop) - element.clientHeight < 300) {
      !isAutoScroll && setIsAutoScroll(true);
    } else {
      isAutoScroll && setIsAutoScroll(false);
    }
  };

  useEffect(() => {
    if (isAutoScroll) {
      messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [dispatch, messages, isAutoScroll]);

  return (
    <div className={style.chat__item} onScroll={scrollHandler}>
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messagesAnchorRef} />
    </div>
  );
};
