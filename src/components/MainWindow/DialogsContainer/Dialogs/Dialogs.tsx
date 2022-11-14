import React, { FC } from 'react';

import { Helmet } from 'react-helmet';

import { DialogPropsType } from '../types';

import { ReduxAddMessageForm } from './AddMessageForm';
import { Dialog } from './Dialog';
import { DialogsItem } from './DialogItem';
import style from './Dialogs.module.scss';
import { FormMessagesType } from './types';

export const Dialogs: FC<DialogPropsType> = ({ messagesPage, addMessage }) => {
  const dialogsItem = messagesPage.users.map(user => (
    <DialogsItem key={user.id} name={user.name} id={user.id} img={user.img} />
  ));

  const message = messagesPage.messages.map(message => (
    <Dialog key={message.id} message={message.message} id={message.id} />
  ));

  const addNewMessage = (values: FormMessagesType): void => {
    addMessage(values.newMessageText);
  };

  return (
    <section className={style.dialogs}>
      <Helmet>
        <title>Dialogs</title>
        <meta name="description" content="your messages page" />
        <meta name="keywords" content="dialogs, conversation, friends, messages" />
      </Helmet>
      <div className={style.dialogs__dialog}>
        <div className={style.dialogItem}>{dialogsItem}</div>
        <div className={style.messages}>{message}</div>
      </div>
      <ReduxAddMessageForm onSubmit={addNewMessage} />
    </section>
  );
};
