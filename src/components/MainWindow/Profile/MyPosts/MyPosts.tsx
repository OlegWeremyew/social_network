import React, {ChangeEvent} from 'react';
import c from "./MyPosts.module.css"
import Post from "./Post/Post";
import {ProfilePageType} from "../../../../redux/store";
import {UsersPropsType} from "./MyPostsContainer";

const MyPosts = (props: UsersPropsType) => {

    let post = props.profilePage.posts.map(p => <Post key={p.id}
                                                      message={p.message}
                                                      likesCount={p.likesCount}
                                                      id={p.id}/>)

    let addPost = () => {
        props.onAddPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.updateNewPostText(newText)
    }


    return (
        <div className={c.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profilePage.newPostText}
                              placeholder={'Write your message'}/>
                </div>
                <div>
                    <button disabled={props.profilePage.newPostText.trim() === ''} onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {post}
            </div>
        </div>
    );
}

export default MyPosts;