import React from 'react';
import {addPostCreator, initialStateType, updateNewPostTextCreator} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/reduxStore";
import {Dispatch} from "redux";

/*type mapStateToPropsType ={
    profilePage: InitialProfileStateType
}*/


type MapStateToPropsType = {
    profilePage: initialStateType
}

type MapDispatchToProps = {
    onAddPost: () => void
    updateNewPostText: (newText: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
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
