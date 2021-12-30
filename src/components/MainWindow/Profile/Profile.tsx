import React from 'react';
import c from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType, StoreType} from "../../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = () => {

    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;