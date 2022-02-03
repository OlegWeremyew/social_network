import React from 'react';
import c from "./MyPosts.module.css"
import Post from "./Post/Post";
import {UsersPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type AddNewPostFormType = {
    ProfileAddNewPostForm: string
}

export const MyPosts = (props: UsersPropsType) => {

    let post = props.profilePage.posts.map(p => <Post key={p.id}
                                                      message={p.message}
                                                      likesCount={p.likesCount}
                                                      id={p.id}/>)

    let addPost = (values: AddNewPostFormType) => {
        props.onAddPost(values.ProfileAddNewPostForm)
    }

    return (
        <div className={c.myPosts}>
            <h3>My posts</h3>
            <ReduxAddNewPostForm onSubmit={addPost}/>
            <div className={c.posts}>
                {post}
            </div>
        </div>
    );
}

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={"textarea"}
                    name={"AddNewPost"}
                    placeholder={"Write your message"}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const ReduxAddNewPostForm = reduxForm<AddNewPostFormType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)
