import React, { FC, memo } from 'react';

import { UsersPropsType } from '../types';

import style from './MyPosts.module.css';
import { Post } from './Post';
import { ReduxAddNewPostForm } from './ReduxAddNewPostForm';
import { AddNewPostFormType } from './types';

export const MyPosts: FC<UsersPropsType> = memo(({ profilePage, onAddPost }) => {
  const post = profilePage.posts.map(post => (
    <Post
      key={post.id}
      message={post.message}
      likesCount={post.likesCount}
      id={post.id}
    />
  ));

  const addPost = (values: AddNewPostFormType): void => {
    onAddPost(values.AddNewPost);
  };

  return (
    <div className={style.myPosts}>
      <h3 className={style.post__title}>My posts :</h3>
      <ReduxAddNewPostForm onSubmit={addPost} />
      <div className={style.posts}>{post}</div>
    </div>
  );
});
