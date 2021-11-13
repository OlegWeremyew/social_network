import React from 'react';
import c from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPosts />
        </div>
    );
}

export default Profile;