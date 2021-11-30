import React, {RefObject, useRef} from 'react';
import c from "./MyPosts.module.css"
import {ProfilePageType} from "../../../../redux/state";
import Post from "./Post/Post";

export type MyPostMessageType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
}


const MyPosts = (props: MyPostMessageType) => {

    let post = props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null);

    let addPost = () => {
        let text = newPostElement.current?.value
        if (text) props.addPost(text)
        if (newPostElement.current) newPostElement.current.value = ''
    }

    return (
        <div className={c.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
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