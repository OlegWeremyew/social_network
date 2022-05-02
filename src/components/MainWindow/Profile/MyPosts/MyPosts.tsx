import React, {SyntheticEvent} from 'react';
import style from "./MyPosts.module.css"

import Post from "./Post/Post";
import {UsersPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../../common/FormsControls/FormsControls";
import s from "../../../Login/Login.module.scss";
import {maxLengthCreator, required} from "../../../../utils";
import {ReturnComponentType} from "../../../../types/ReturnComponentType";

const maxLength = maxLengthCreator(10)

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

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = ({
                                                                             handleSubmit,
                                                                             reset
                                                                         }): ReturnComponentType => {

    const onSubmit = (values: SyntheticEvent<any, Event>): void => {
        handleSubmit(values)
        reset()
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={"AddNewPost"}
                    placeholder={"Write your message ✉"}
                    validate={[required, maxLength]}
                />
            </div>
            <div className={s.form__btn}>
                <button type="submit">Add post</button>
            </div>
        </form>
    )
}

const ReduxAddNewPostForm = reduxForm<AddNewPostFormType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)

//types

type AddNewPostFormType = {
    AddNewPost: string
}