import React from 'react';
import c from "./MyPosts.module.css"
import Post from "./Post/Post";
import {UsersPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(10)

export const MyPosts = React.memo(({profilePage, onAddPost}: UsersPropsType) => {

    const post = profilePage.posts
        .map(p =>
            <Post
                key={p.id}
                message={p.message}
                likesCount={p.likesCount}
                id={p.id}
            />)

    const addPost = (values: AddNewPostFormType) => {
        onAddPost(values.AddNewPost)
    }

    return (
        <div className={c.myPosts}>
            <h3>My posts</h3>
            <ReduxAddNewPostForm onSubmit={addPost}/>
            <div className={c.posts}>
                {post}
            </div>
        </div>
    )
})

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={"AddNewPost"}
                    placeholder={"Write your message"}
                    validate={[required, maxLength]}
                />
            </div>
            <div>
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