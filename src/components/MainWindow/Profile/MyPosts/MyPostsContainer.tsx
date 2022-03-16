import React from 'react';
import {initialStateType, ProfileActions} from "../../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/reduxStore";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    profilePage: initialStateType
}

type MapDispatchToProps = {
    onAddPost: (newPostText: string) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        onAddPost: (newPostText: string) => {
            dispatch(ProfileActions.addPost(newPostText))
        },
    }
}

export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)
