import React, { FC } from 'react';

import { MyPostsContainer } from './MyPostsContainer/MyPostsContainer';
import style from './Profile.module.scss';
import { ProfileInfo } from './ProfileInfo';
import { ProfilePropsType } from './types';

import { ReturnComponentType } from 'types/ReturnComponentType';

export const Profile: FC<ProfilePropsType> = ({
  profile,
  status,
  updateUserStatus,
  isOwner,
  savePhoto,
  saveProfile,
}): ReturnComponentType => (
  <section className={style.profile}>
    <ProfileInfo
      profile={profile}
      status={status}
      updateUserStatus={updateUserStatus}
      isOwner={isOwner}
      savePhoto={savePhoto}
      saveProfile={saveProfile}
    />
    {isOwner && <MyPostsContainer />}
  </section>
);
