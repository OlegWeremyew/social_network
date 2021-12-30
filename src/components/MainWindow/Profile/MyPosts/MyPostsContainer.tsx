import React from 'react';
import {ActionTypes, ProfilePageType} from "../../../../redux/store";
import {addPostCreator, updateNewPostTextCreator} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";

export type MyPostMessageType = {
    store: any
}


const MyPostsContainer = (props: MyPostMessageType) => {

    let store = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostCreator())
    }

    const onPostChange = (newText: string) => {
        newText ? props.store.dispatch(updateNewPostTextCreator(newText)) :
            props.store.dispatch(updateNewPostTextCreator(""))
    }

    return (
        <div>
            <MyPosts
                updateNewPostText={onPostChange}
                onAddPost={addPost}
                posts={store.profilePage.posts}
                newPostText={store.profilePage.newPostText}
            />
        </div>
    );
}

export default MyPostsContainer;