import React from 'react';
import c from "./Users.module.css";
import userImage from "../../../assets/images/user.png";
import {follow, unFollow, UserType} from "../../../redux/usersReducer";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

export const User: React.FC<UsersPropsType> = ({user, followingInProgress}) => {

    const dispatch = useDispatch()

    const followHandler = (userID: string) => {
        dispatch(follow(userID))
    }

    const unfollowHandler = (userID: string) => {
        dispatch(unFollow(userID))
    }

    return (
        <div>
            <div>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img
                            src={user.photos.small !== null ? user.photos.small : userImage}
                            className={c.userPhoto}
                            alt="photo"
                            title={user.name}
                        />
                    </NavLink>
                </div>
                <div>
                    {
                        user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => unfollowHandler(user.id)}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => followHandler(user.id)}>Follow</button>
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

//type

type UsersPropsType = {
    user: UserType
    followingInProgress: string[]
}