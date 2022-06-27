import React, { ComponentType } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { ProfileAPIContainer } from './ProfileAPIContainer';
import { MapStateToPropsProfileType } from './types';

import {
  getUserProfile,
  getUserStatus,
  savePhoto,
  saveProfile,
  updateUserStatus,
} from 'redux/profileReducer';
import { AppStateType } from 'redux/types';
import {
  getAuthAuthorizedUserIDSelector,
  getAuthIsAuthSelector,
  getProfilePageProfileSelector,
  getProfilePageStatusSelector,
} from 'selectors';
import { withAuthRedirect, withRouter2 } from 'utils';

const mapStateToProps = (state: AppStateType): MapStateToPropsProfileType => ({
  profile: getProfilePageProfileSelector(state),
  isAuth: getAuthIsAuthSelector(state),
  status: getProfilePageStatusSelector(state),
  authorizedUserID: getAuthAuthorizedUserIDSelector(state),
});

const ProfileContainer = compose<ComponentType>(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter2,
  withAuthRedirect,
)(ProfileAPIContainer);

export default ProfileContainer;
