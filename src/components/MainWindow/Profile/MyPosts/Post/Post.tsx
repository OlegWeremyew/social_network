import React from 'react';
import c from "./Post.module.css"

type PostMessageType = {
    message: string
    likesCount: number
}

const Post = (props: PostMessageType) => {
    return (
        <div className={c.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxFfwGbGONI4_ANZMHSTx2XiNnL0Y96C254Q&usqp=CAU" alt="ava" title="ava" />
            {props.message}
            <div>
                <span>like: {props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;