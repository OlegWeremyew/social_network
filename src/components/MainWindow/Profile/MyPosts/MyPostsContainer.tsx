import React from 'react';
import {connect} from "react-redux";

import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../../redux/reduxStore";
import {getProfilePageSelector} from "../../../../selectors";
import {ProfileActions} from "../../../../redux/profileReducer";
import {initialStateProfileType} from "../../../../redux/profileReducer/types";

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: getProfilePageSelector(state)
    }
}

export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
    onAddPost: ProfileActions.addPost
})(MyPosts)

//types=============

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

type MapStateToPropsType = {
    profilePage: initialStateProfileType
}

type MapDispatchToProps = {
    onAddPost: (newPostText: string) => void
}