import React from 'react';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import styles from './Loading.module.scss';

export const Loading = (): ReturnComponentType => (
  <div className={styles.container}>
    <div className={styles.loader_three} />
  </div>
);
