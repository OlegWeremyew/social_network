import React, { FC } from 'react';

import styles from './FormsControls.module.scss';
import { FormControlPropsParamsType } from './types';

import { EMPTY_STRING } from 'constants/variables';

export const FormControl: FC<FormControlPropsParamsType> = ({
  meta: { touched, error },
  children,
}) => {
  const hasError = touched && error;
  const styleError = hasError ? styles.error : EMPTY_STRING;

  return (
    <div className={`${styles.FormControl} ${styleError}`}>
      <div>{children}</div>
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  );
};
