import React, {ChangeEvent} from 'react';
import c from "./MyPosts.module.css"
import {PostType, ProfilePageType} from "../../../../redux/store";
import Post from "./Post/Post";

export type MyPostMessageType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (newText: string) => void
    onAddPost: () => void
}


const MyPosts = (props: MyPostMessageType) => {

    let post = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}
                                                      id={p.id}/>)

    let addPost = () => {
        props.onAddPost()
    }

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.updateNewPostText(newText)
    }


    return (
        <div className={c.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}
                              placeholder={'Write your message'}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {post}
            </div>
        </div>
    );
}

export default MyPosts;