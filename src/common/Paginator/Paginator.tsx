import React, { useEffect, useState } from 'react';

import cn from 'classnames';

import { ReturnComponentType } from '../../types/ReturnComponentType';

import styles from './Paginator.module.scss';
import { UsersPropsType } from './types';

export const Paginator: React.FC<UsersPropsType> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}): ReturnComponentType => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages: number[] = [];

  for (let i = 1; i <= pagesCount; i += 1) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState<number>(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  useEffect(() => {
    setPortionNumber(Math.ceil(currentPage / portionSize));
  }, [currentPage, portionSize]);

  return (
    <div className={cn(styles.paginator)}>
      <div className={styles.DisplayNone}>
        {portionNumber > 1 && (
          <div
            className={styles.user__btn}
            onClick={() => setPortionNumber(portionNumber - 1)}
          >
            <button type="button">&#10096;</button>
          </div>
        )}
      </div>
      <div className={styles.DisplayBlock}>
        {portionNumber > 1 && (
          <div
            className={styles.user__btn}
            onClick={() => setPortionNumber(portionNumber - 1)}
          >
            <button type="button">&#10096; &#10096; &#10096;</button>
          </div>
        )}
      </div>
      <div>
        {pages
          .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
          .map(page => (
            <span
              className={cn(
                { [styles.selectedPage]: currentPage === page },
                styles.pageNumber,
              )}
              key={page}
              onClick={() => onPageChanged(page)}
            >
              {page}
            </span>
          ))}
      </div>
      <div className={styles.DisplayNone}>
        {portionCount > portionNumber && (
          <div
            className={styles.user__btn}
            onClick={() => setPortionNumber(portionNumber + 1)}
          >
            <button type="button">&#10097;</button>
          </div>
        )}
      </div>
      <div className={styles.DisplayBlock}>
        {portionCount > portionNumber && (
          <div
            className={styles.user__btn}
            onClick={() => setPortionNumber(portionNumber + 1)}
          >
            <button type="button">&#10097; &#10097; &#10097;</button>
          </div>
        )}
      </div>
    </div>
  );
};
