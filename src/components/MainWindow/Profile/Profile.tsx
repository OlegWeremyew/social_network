import React from 'react';
import c from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={c.profile}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&usqp=CAU"
                alt="fone" title="fon image"/>
            <div className={c.ava}>
                ava
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;