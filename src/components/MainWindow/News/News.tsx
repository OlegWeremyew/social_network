import React, { FC, useState } from 'react';

import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';

import style from './News.module.scss';
import { NewsItem } from './NewsItem';

import { Preloader } from 'common';
import { EMPTY_STRING } from 'constants/variables';
import { NewsActions } from 'redux/NewsReducer';
import { NewsType } from 'redux/NewsReducer/types';
import { getIsFetching } from 'selectors';
import { useGetHistoryList } from 'utils/localStorage/useGetNewsListFromLocalStorage';

export const News: FC = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>(EMPTY_STRING);
  const [error, setError] = useState<string>(EMPTY_STRING);
  const [activateAddMode, setActivateAddMode] = useState<boolean>(false);

  const newsArray: NewsType[] = useGetHistoryList();
  const isFetching: boolean = useSelector(getIsFetching);

  const activateAddModeHandler = (): void => {
    setActivateAddMode(!activateAddMode);
  };

  const onChangeHandler = (title: string): void => {
    setError(EMPTY_STRING);
    setTitle(title);
  };
  const addNews = (): void => {
    if (title.trim()) {
      dispatch(NewsActions.addNews(title));
      setError(EMPTY_STRING);
      setTitle(EMPTY_STRING);
    } else {
      const error = 'Field is required';
      setError(error);
    }
  };

  const cancelHandler = (): void => {
    setActivateAddMode(!activateAddMode);
    setError(EMPTY_STRING);
  };

  return (
    <section className={style.news}>
      <Helmet>
        <title>News</title>
        <meta name="description" content="different news" />
        <meta name="keywords" content="news, posts, hobby, interests, articles" />
      </Helmet>
      {isFetching ? <Preloader /> : null}
      <h3 className={style.news__title}>News</h3>
      <div className={style.newsBlock}>
        {newsArray.map(news => (
          <NewsItem key={news.id} news={news} />
        ))}
      </div>
      {activateAddMode ? (
        <div className={style.addNewsForm}>
          {error ? (
            <div className={style.ErrorBlock}>
              <textarea
                onChange={e => onChangeHandler(e.currentTarget.value)}
                value={title}
                placeholder="write news title"
              />
              <div className={style.addNewsError}>{error}</div>
            </div>
          ) : (
            <textarea
              onChange={e => onChangeHandler(e.currentTarget.value)}
              value={title}
              placeholder="write news title"
            />
          )}
          <div className={style.button__group}>
            <div className={style.form__btn} onClick={addNews}>
              <button type="button">Save</button>
            </div>
            <div className={style.form__btn} onClick={cancelHandler}>
              <button type="button">Cancel</button>
            </div>
          </div>
        </div>
      ) : (
        <div className={style.form__btn} onClick={activateAddModeHandler}>
          <button type="button">Add new news</button>
        </div>
      )}
    </section>
  );
};
