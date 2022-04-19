import React, {SyntheticEvent} from 'react';
import style from "./MyPosts.module.css"

import Post from "./Post/Post";
import {UsersPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../../common/FormsControls/FormsControls";
import s from "../../../Login/Login.module.css";

const maxLength = maxLengthCreator(10)

export const MyPosts = React.memo(({profilePage, onAddPost}: UsersPropsType) => {

    const post = profilePage.posts
        .map(post =>
            <Post
                key={post.id}
                message={post.message}
                likesCount={post.likesCount}
                id={post.id}
            />)

    const addPost = (values: AddNewPostFormType) => {
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

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = ({handleSubmit, reset}) => {

    const onSubmit = (values: SyntheticEvent<any, Event>) => {
            handleSubmit(values)
            reset()
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={"AddNewPost"}
                    placeholder={"Write your message"}
                    validate={[required, maxLength]}
                />
            </div>
            <div className={s.form__btn}>
                <button>Add post</button>
            </div>
        </form>
    )
}

const ReduxAddNewPostForm = reduxForm<AddNewPostFormType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)

//types

type AddNewPostFormType = {
    AddNewPost: string
}