import React, { FC, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { EMPTY_STRING } from '../../../../../../../../constants';
import { ProfileActions } from '../../../../../../../../redux/profileReducer';
import { PostType } from '../../../../../../../../redux/profileReducer/types';
import { getProfilePageProfilePhotosLargeSelector } from '../../../../../../../../selectors';
import { Nullable } from '../../../../../../../../types/Nullable';
import { Undetectable } from '../../../../../../../../types/Undetectable';

import style from './Post.module.css';

export const Post: FC<PostType> = ({ message, likesCount, id }) => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState<boolean>(false);
  const [fingerUp, setFingerUp] = useState<boolean>(false);

  const userAvatar: Nullable<Undetectable<string>> = useSelector(
    getProfilePageProfilePhotosLargeSelector,
  );

  const heart = editMode ? style.active : style.notActive;

  const statusChangeHandler = (): void => {
    setEditMode(!editMode);
  };

  const fingerUpChangeHandler = (): void => {
    setFingerUp(!fingerUp);
  };

  const deletePostHandler = (id: number): void => {
    dispatch(ProfileActions.deletePost(id));
  };

  return (
    <div className={style.item}>
      <div className={style.postAvatar}>
        <img src={userAvatar || EMPTY_STRING} alt="ava" title="ava" />
      </div>
      <div className={style.itemText}>
        {message}
        <div className={style.activeBlock}>
          <span className={style.likeCounter} onClick={statusChangeHandler}>
            like: {editMode ? likesCount + 1 : likesCount}
            <span className={heart}>&#9829;</span>
          </span>
          <span className={style.likeCounter} onClick={fingerUpChangeHandler}>
            respect:
            {!fingerUp ? (
              <span className={style.reaction}>&#128077;</span>
            ) : (
              <span className={style.reaction}>&#128526;</span>
            )}
          </span>
        </div>
      </div>
      <div onClick={() => deletePostHandler(id)} className={style.delete__btn}>
        ❌
      </div>
    </div>
  );
};
