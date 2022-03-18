import React from 'react';
import c from "./Users.module.css";
import userImage from "../../../assets/images/user.png";
import {UserType} from "../../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    user: UserType
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    followingInProgress: Array<any>
}

export const User = ({user,follow,unfollow,followingInProgress} : UsersPropsType) => {

    return (<div>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + user.id}>
                            <img src={user.photos.small !== null ? user.photos.small : userImage} className={c.userPhoto}
                                 alt="photo"/>
                                </NavLink>
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => unfollow(user.id)}>Unfollow</button>
                                    : <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={() => follow(user.id)}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>status: {user.status ? user.status : ""}</div>
                        </span>
                    </span>
        </div>
    )
}
