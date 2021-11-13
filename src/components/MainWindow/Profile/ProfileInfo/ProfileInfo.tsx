import React from 'react';
import c from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={c.profile}>
            <img
                src="https://img.lovepik.com/photo/50066/7884.jpg_wh860.jpg" alt="fone" title="fon image"/>
            <div className={c.ava}>
                ava
            </div>
        </div>
    );
}

export default ProfileInfo;