import React, { FC } from 'react';

import styles from './Loading.module.scss';

export const Loading: FC = () => (
  <div className={styles.container}>
    <div className={styles.loader_three} />
  </div>
);
