import React from 'react';
import c from "./MyPosts.module.css"
import Post from "./Post/Post";

export type PostMessageType = {
    message: string
    likesCount: number
}


const MyPosts = () => {

    let posts = [
        {message: "Hello", likesCount: 12},
        {message: "Dinosaurus are great", likesCount: 17}
    ]

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
                <Post message={posts[0].message} likesCount={posts[0].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;