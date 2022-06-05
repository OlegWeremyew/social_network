import React from 'react';

import { WrappedFieldProps } from 'redux-form';

import { FormControl } from '../FormsControls';
import styles from '../FormsControls.module.scss';

export const Textarea: React.FC<WrappedFieldProps> = props => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea className={styles.textarea} {...input} {...restProps} />
    </FormControl>
  );
};
