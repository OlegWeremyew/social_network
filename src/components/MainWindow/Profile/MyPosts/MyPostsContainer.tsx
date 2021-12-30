import React from 'react';
import {ActionTypes, ProfilePageType, StoreType} from "../../../../redux/store";
import {addPostCreator, updateNewPostTextCreator} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../../StoreContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store: StoreType) => {

                    let state = store.getState()

                    let addPost = () => {
                        store.dispatch(addPostCreator())
                    }

                    const onPostChange = (newText: string) => {
                        newText ? store.dispatch(updateNewPostTextCreator(newText)) :
                            store.dispatch(updateNewPostTextCreator(""))
                    }

                    return (
                        <MyPosts
                            updateNewPostText={onPostChange}
                            onAddPost={addPost}
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}
                        />
                    )
                }

            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;