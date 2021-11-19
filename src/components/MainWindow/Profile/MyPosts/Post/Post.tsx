import React from 'react';
import c from "./Post.module.css"

export type PostMessageType = {
    message: string
    likesCount: number
    id: number
}

const Post = (props: PostMessageType) => {

    return (
        <div key={props.id} className={c.item}>
            <img
                src="https://slovami.net/wp-content/uploads/thumbs_dir/the-most-beautiful-guys-russia-4-1-nwkkkydf2f1mhw9a4ijzfs2ktasvevyjiyi4xibqis.jpg"
                alt="ava" title="ava"/>
            <div className={c.itemText}>
                {props.message}
                <div>
                    <span>like: {props.likesCount}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;