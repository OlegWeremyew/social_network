import React from 'react';

import { ReturnComponentType } from '../../../../types/ReturnComponentType';
import { ProfileContainerPropsType } from '../types';

import { Profile } from './Profile';

export class ProfileAPIContainer extends React.Component<ProfileContainerPropsType> {
  refreshProfile(): void {
    let { userId } = this.props;
    const { authorizedUserID, getUserProfile, getUserStatus } = this.props;
    if (!userId) {
      // @ts-ignore
      userId = authorizedUserID;
      if (!userId) {
        // @ts-ignore
        // eslint-disable-next-line react/destructuring-assignment,no-undef
        this.props.history.push(PATH.LOGIN);
      }
    }

    if (!userId) {
      throw new Error('ID should be exists');
    } else {
      getUserProfile(userId);
      getUserStatus(userId);
    }
  }

  componentDidMount(): void {
    this.refreshProfile();
  }

  componentDidUpdate(
    prevProps: Readonly<ProfileContainerPropsType>,
    prevState: Readonly<{}>,
    snapshot?: any,
  ): void {
    const { userId } = this.props;
    if (userId !== prevProps.userId) {
      this.refreshProfile();
    }
  }

  render(): ReturnComponentType {
    const { userId, profile, status, updateUserStatus, savePhoto, saveProfile } =
      this.props;

    return (
      <Profile
        {...this.props}
        isOwner={!userId}
        profile={profile}
        status={status}
        updateUserStatus={updateUserStatus}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
      />
    );
  }
}
