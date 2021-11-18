import React from 'react';
import c from "./MyPosts.module.css"
import Post from "./Post/Post";

export type PostMessageType = {
    message: string
    likesCount: number
}

let posts = [
    {message: "Hello", likesCount: 12},
    {message: "Dinosaurus are great", likesCount: 17}
]

const MyPosts = () => {

let post = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

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