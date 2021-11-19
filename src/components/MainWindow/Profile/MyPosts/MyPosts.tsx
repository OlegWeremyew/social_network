import React from 'react';
import c from "./MyPosts.module.css"
import Post, {PostMessageType} from "./Post/Post";

export type MyPostMessageType = {
    posts: Array<PostMessageType>
}


const MyPosts = (props: MyPostMessageType) => {

    let post = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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