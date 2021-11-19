import React from 'react';
import c from "./Profile.module.css"
import MyPosts, {MyPostMessageType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: MyPostMessageType) => {

    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;