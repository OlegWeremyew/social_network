import React from 'react';
import c from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../../redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
}

const Profile = (props: ProfileType) => {

    return (
        <div className={c.profile}>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;