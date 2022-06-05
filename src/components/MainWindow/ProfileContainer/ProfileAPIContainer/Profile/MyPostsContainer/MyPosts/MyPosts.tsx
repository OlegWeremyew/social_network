import React from 'react';
import style from "./MyPosts.module.css"

import {ReturnComponentType} from "../../../../../../../types/ReturnComponentType";
import {Post} from "./Post";
import {UsersPropsType} from "../types";
import {AddNewPostFormType} from "./types";
import {ReduxAddNewPostForm} from "./ReduxAddNewPostForm";

export const MyPosts: React.FC<UsersPropsType> = React.memo(({profilePage, onAddPost}): ReturnComponentType => {

    const post = profilePage.posts
        .map(post =>
            <Post
                key={post.id}
                message={post.message}
                likesCount={post.likesCount}
                id={post.id}
            />)

    const addPost = (values: AddNewPostFormType): void => {
        onAddPost(values.AddNewPost)
    }

    return (
        <div className={style.myPosts}>
            <h3 className={style.post__title}>My posts :</h3>
            <ReduxAddNewPostForm onSubmit={addPost}/>
            <div className={style.posts}>
                {post}
            </div>
        </div>
    )
})
