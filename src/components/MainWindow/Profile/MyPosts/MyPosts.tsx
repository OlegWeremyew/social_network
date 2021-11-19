import React from 'react';
import c from "./MyPosts.module.css"
import {ProfilePageType} from "../../../../redux/state";
import Post from "./Post/Post";

export type MyPostMessageType = {
    state: ProfilePageType
}


const MyPosts = (props: MyPostMessageType) => {

    let post = props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    return (
        <div className={c.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <div className={c.posts}>
                {post}
            </div>
        </div>
    );
}

export default MyPosts;