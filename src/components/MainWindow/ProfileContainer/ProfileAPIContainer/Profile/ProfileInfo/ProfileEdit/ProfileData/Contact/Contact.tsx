import React, { FC } from 'react';

import { EMPTY_STRING } from '../../../../../../../../../constants';

import style from './Contact.module.scss';
import { ContactsPropsType } from './types';

export const Contact: FC<ContactsPropsType> = ({ contactTitle, contactValue }) => (
  <div className={style.formBlock}>
    <b>
      <a href={contactValue || EMPTY_STRING}> {contactTitle}</a>:
    </b>
    {contactValue ? (
      <span>{contactValue}</span>
    ) : (
      <span>"Information is not provided"</span>
    )}
  </div>
);
