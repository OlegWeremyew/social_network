import React from 'react';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import userImage from '../../../../../assets/images/user.png';
import { PATH } from '../../../../../enums';
import { follow, unFollow } from '../../../../../redux/usersReducer';
import { UserType } from '../../../../../redux/usersReducer/types';
import { ReturnComponentType } from '../../../../../types/ReturnComponentType';

import style from './User.module.scss';

export const User: React.FC<UsersPropsType> = ({
  user,
  followingInProgress,
}): ReturnComponentType => {
  const dispatch = useDispatch();

  const followHandler = (userID: string): void => {
    dispatch(follow(userID));
  };

  const unfollowHandler = (userID: string): void => {
    dispatch(unFollow(userID));
  };

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
        {user.followed ? (
          <div className={style.user__btn} onClick={() => unfollowHandler(user.id)}>
            <button
              type="button"
              disabled={followingInProgress.some(id => id === user.id)}
            >
              Unfollow
            </button>
          </div>
        ) : (
          <div
            className={style.user__btn_unFollow}
            onClick={() => followHandler(user.id)}
          >
            <button
              type="button"
              disabled={followingInProgress.some(id => id === user.id)}
            >
              Follow
            </button>
          </div>
        )}
      </div>
      <div>
        <div className={style.userInfo}>
          <NavLink to={`${PATH.PROFILE}/${user.id}`}>
            <div className={style.userName}>
              User name : <span className={style.user__text}>{user.name}</span>
            </div>
          </NavLink>
          <div className={style.userStatus}>
            User status :
            <span className={style.user__text}>
              {user.status ? user.status.slice(0, 50) : ' empty'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// type

type UsersPropsType = {
  user: UserType;
  followingInProgress: string[];
};
