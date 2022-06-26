import React, { FC } from 'react';

import { WrappedFieldProps } from 'redux-form';

import { FormControl } from '../FormsControls';
import styles from '../FormsControls.module.scss';

export const Input: FC<WrappedFieldProps> = props => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input className={styles.input} {...input} {...restProps} />
    </FormControl>
  );
};
