import React from 'react';
import c from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../../redux/state";

type ProfileType = {
    state: ProfilePageType
}

const Profile = (props: ProfileType) => {

    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPosts state={props.state}/>
        </div>
    );
}

export default Profile;