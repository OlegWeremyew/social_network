import React from 'react';
import c from "./Users.module.css";
import userImage from "../../../assets/images/user.png";
import {UserActions, UserType} from "../../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

type UsersPropsType = {
    user: UserType
    followingInProgress: Array<any>
}

export const User = ({user, followingInProgress}: UsersPropsType) => {

    const dispatch = useDispatch()

    const follow = (userID: string) => {
        dispatch(UserActions.followSuccess(userID))
    }

    const unfollow = (userID: string) => {
        dispatch(UserActions.unfollowSuccess(userID))
    }

    return (
        <div>
            <div>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <img
                            src={user.photos.small !== null ? user.photos.small : userImage}
                            className={c.userPhoto}
                            alt="photo"
                            title={user.name}/>
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
            </div>
            <div>
                <div>
                    <div>{user.name}</div>
                    <div>status: {user.status ? user.status : ""}</div>
                </div>
            </div>
        </div>
    )
}
