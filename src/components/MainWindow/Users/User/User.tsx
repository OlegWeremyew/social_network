import React from 'react';
import style from "./User.module.css";
import userImage from "../../../../assets/images/user.png";
import {follow, unFollow, UserType} from "../../../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {PATH} from "../../../../common/RouterPath/RouterPath";

export const User: React.FC<UsersPropsType> = ({user, followingInProgress}) => {

    const dispatch = useDispatch()

    const followHandler = (userID: string) => {
        dispatch(follow(userID))
    }

    const unfollowHandler = (userID: string) => {
        dispatch(unFollow(userID))
    }

    return (
        <div className={style.userBlock}>
            <div>
                <div>
                    <NavLink to={`${PATH.PROFILE}/${user.id}`}>
                        <img
                            className={style.userPhoto}
                            src={user.photos.small !== null ? user.photos.small : userImage}
                            alt={`${user.name} photo`}
                        />
                    </NavLink>
                </div>
                {
                    user.followed
                        ? (
                            <div className={style.user__btn}>
                                <button disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={() => unfollowHandler(user.id)}>Unfollow
                                </button>
                            </div>
                        ) : (
                            <div className={style.user__btn_unFollow}>
                                <button disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={() => followHandler(user.id)}>Follow
                                </button>
                            </div>
                        )
                }
            </div>
            <div>
                <div className={style.userInfo}>
                    <div className={style.userName}>User name : <span className={style.user__text}>{user.name}</span>
                    </div>
                    <div className={style.userStatus}>User status :
                        <span className={style.user__text}>
                                {
                                    user.status
                                        ? user.status.slice(0, 50)
                                        : " empty"
                                }
                                </span>
                    </div>
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