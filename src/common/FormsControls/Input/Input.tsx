import React, { FC } from 'react';

import { WrappedFieldProps } from 'redux-form';

import styles from '../FormsControls.module.scss';

import { FormControl } from 'common/FormsControls/FormsControls';

export const Input: FC<WrappedFieldProps> = props => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input className={styles.input} {...input} {...restProps} />
    </FormControl>
  );
};
