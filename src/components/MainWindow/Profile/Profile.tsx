import React from 'react';
import c from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPost, ProfilePageType} from "../../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;