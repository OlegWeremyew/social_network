import React, {useRef} from 'react';
import c from "./MyPosts.module.css"
import {addPostCreater, ProfilePageType, udateNewPostTextCreater} from "../../../../redux/state";
import Post from "./Post/Post";

export type MyPostMessageType = {
    profilePage: ProfilePageType
    dispatch: (action: any) => void
}


const MyPosts = (props: MyPostMessageType) => {

    let post = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null);

    let addPost = () => {
        let text = newPostElement.current?.value
        if (text) props.dispatch(addPostCreater())
        if (newPostElement.current) newPostElement.current.value = ''
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value
        text ? props.dispatch(udateNewPostTextCreater(text)) :
            props.dispatch(udateNewPostTextCreater(""))
    }

    return (
        <div className={c.myPosts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.profilePage.newPostText}
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