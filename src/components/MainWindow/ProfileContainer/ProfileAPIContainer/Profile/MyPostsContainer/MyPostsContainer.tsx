import { connect } from 'react-redux';

import { ProfileActions } from '../../../../../../redux/profileReducer';
import { AppStateType } from '../../../../../../redux/types';
import { getProfilePageSelector } from '../../../../../../selectors';

import { MyPosts } from './MyPosts';
import { MapDispatchToProps, MapStateToPropsType } from './types';

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  profilePage: getProfilePageSelector(state),
});

export const MyPostsContainer = connect<
  MapStateToPropsType,
  MapDispatchToProps,
  {},
  AppStateType
>(mapStateToProps, {
  onAddPost: ProfileActions.addPost,
})(MyPosts);
