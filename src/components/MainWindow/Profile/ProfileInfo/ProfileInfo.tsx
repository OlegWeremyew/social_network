import React from 'react';
import c from "./ProfileInfo.module.css"
import avatarDefault from '../../../../assets/images/avatar_for_profile.jpg'
import {ProfileType} from "../../../../redux/profileReducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    return (
        <div className={c.profile}>
{/*            <div className={c.ground}>
                <img
                    src="https://img.lovepik.com/photo/50066/7884.jpg_wh860.jpg" alt="fon image" title="fon image"/>
            </div>*/}
            <div className={c.avatarBlock}>
                <div className={c.avatar}>
                    <img alt='ava'
                         src={props.profile && props.profile.photos.large !== null ? props.profile.photos.large : avatarDefault}/>
                </div>
                <ProfileStatus
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}
                />
            </div>
        </div>
    );
}

export default ProfileInfo;