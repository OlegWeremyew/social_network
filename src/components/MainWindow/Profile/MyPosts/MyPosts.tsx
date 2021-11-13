import React from 'react';
import c from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={c.myPosts}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </div>
            <div className={c.posts}>
                <Post message="Hello" likesCount={12}/>
                <Post message="Dinosaurus are great" likesCount={3}/>
            </div>
        </div>
    );
}

export default MyPosts;