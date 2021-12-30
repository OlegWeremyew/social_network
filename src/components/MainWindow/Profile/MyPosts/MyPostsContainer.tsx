import React from 'react';
import {RootStateType} from "../../../../redux/store";
import {addPostCreator, updateNewPostTextCreator} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        onAddPost: () => {
            dispatch(addPostCreator())
        },
        updateNewPostText: (newText: string) => {
            newText ? dispatch(updateNewPostTextCreator(newText)) :
                dispatch(updateNewPostTextCreator(""))
        },
    }
}

export let MyPostsContainer: any = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
