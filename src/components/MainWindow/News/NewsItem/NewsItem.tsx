import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { NewsActions } from '../../../../redux/NewsReducer';
import { ReturnComponentType } from '../../../../types/ReturnComponentType';

import style from './NewsItem.module.scss';
import { PropsType } from './types';

export const NewsItem: React.FC<PropsType> = ({ news }): ReturnComponentType => {
  const dispatch = useDispatch();

  const [titleEditMode, setTitleEditMode] = useState<boolean>(false);
  const [textEditMode, setTextEditMode] = useState<boolean>(false);

  const titleChangeHandler = (): void => {
    setTitleEditMode(!titleEditMode);
    setTextEditMode(false);
  };

  const textChangeHandler = (): void => {
    setTextEditMode(!textEditMode);
    setTitleEditMode(false);
  };

  const deleteNewsHandler = (newsId: string): void => {
    dispatch(NewsActions.deleteNews(newsId));
  };

  const changeTitle = (newsID: string, title: string): void => {
    dispatch(NewsActions.changeNewsTitle(newsID, title));
  };

  const changeText = (newsID: string, text: string): void => {
    dispatch(NewsActions.changeNewsText(newsID, text));
  };

  return (
    <div className={style.newsBlock__item}>
      <div className={style.newsBlock__itemBlock}>
        <img className={style.image} src={news.image} alt="news" />
      </div>
      <div className={style.main}>
        <div>
          <div className={style.main__title} onDoubleClick={titleChangeHandler}>
            {titleEditMode ? (
              <input
                type="text"
                autoFocus
                value={news.title}
                onChange={e => changeTitle(news.id, e.currentTarget.value)}
              />
            ) : (
              <span>{news.title}</span>
            )}
          </div>

          <div className={style.main__text} onDoubleClick={textChangeHandler}>
            {textEditMode ? (
              <textarea
                autoFocus
                value={news.text}
                onChange={e => changeText(news.id, e.currentTarget.value)}
              />
            ) : (
              <span>{news.text}</span>
            )}
          </div>
        </div>

        <div className={style.button__group}>
          {titleEditMode ? (
            <div className={style.form__btn} onClick={titleChangeHandler}>
              <button type="button">Save</button>
            </div>
          ) : (
            <div className={style.form__btn} onClick={titleChangeHandler}>
              <button type="button">Edit title ✎</button>
            </div>
          )}
          {textEditMode ? (
            <div className={style.form__btn} onClick={textChangeHandler}>
              <button type="button">Save</button>
            </div>
          ) : (
            <div className={style.form__btn} onClick={textChangeHandler}>
              <button type="button">Edit text ✎</button>
            </div>
          )}
          <div className={style.form__btn} onClick={() => deleteNewsHandler(news.id)}>
            <button type="button">Delete news ⌦</button>
          </div>
        </div>
      </div>
    </div>
  );
};
