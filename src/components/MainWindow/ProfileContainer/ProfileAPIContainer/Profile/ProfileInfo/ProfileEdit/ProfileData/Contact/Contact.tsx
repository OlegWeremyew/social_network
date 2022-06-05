import React, { FC } from 'react';

import { EMPTY_STRING } from '../../../../../../../../../constants';
import { ReturnComponentType } from '../../../../../../../../../types/ReturnComponentType';

import style from './Contact.module.scss';
import { ContactsPropsType } from './types';

export const Contact: FC<ContactsPropsType> = ({
  contactTitle,
  contactValue,
}): ReturnComponentType => (
  <div className={style.formBlock}>
    <b>
      <a href={contactValue || EMPTY_STRING}> {contactTitle}</a>:
    </b>
    {contactValue ? (
      <span>{contactValue}</span>
    ) : (
      // eslint-disable-next-line react/no-unescaped-entities
      <span>"Information is not provided"</span>
    )}
  </div>
);
