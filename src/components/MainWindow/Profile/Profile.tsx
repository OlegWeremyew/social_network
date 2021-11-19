import React from 'react';
import c from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostMessageType} from "./MyPosts/Post/Post";

const Profile = () => {

    let posts: Array<PostMessageType> = [
        {message: "Hello", likesCount: 12},
        {message: "Dinosaurus are great", likesCount: 17}
    ]

    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
}

export default Profile;