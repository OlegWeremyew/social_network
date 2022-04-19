import React from 'react';
import {connect} from "react-redux";

import {initialStateProfileType, ProfileActions} from "../../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../../redux/reduxStore";
import {getProfilePageSelector} from "../../../../selectors/profileSelectors";

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