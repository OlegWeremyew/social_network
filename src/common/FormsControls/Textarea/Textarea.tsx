import React, { FC } from 'react';

import { WrappedFieldProps } from 'redux-form';

import styles from '../FormsControls.module.scss';

import { FormControl } from 'common/FormsControls/FormsControls';

export const Textarea: FC<WrappedFieldProps> = props => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea className={styles.textarea} {...input} {...restProps} />
    </FormControl>
  );
};
