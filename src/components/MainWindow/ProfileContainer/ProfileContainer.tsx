import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {
    getAuthAuthorizedUserIDSelector,
    getAuthIsAuthSelector,
    getProfilePageProfileSelector,
    getProfilePageStatusSelector
} from "../../../selectors";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../../redux/profileReducer";
import {withAuthRedirect, withRouter2} from "../../../utils";
import {MapStateToPropsProfileType} from "./types";
import {AppStateType} from "../../../redux/types";
import {ProfileAPIContainer} from "./ProfileAPIContainer";

const mapStateToProps = (state: AppStateType): MapStateToPropsProfileType => {
    return {
        profile: getProfilePageProfileSelector(state),
        isAuth: getAuthIsAuthSelector(state),
        status: getProfilePageStatusSelector(state),
        authorizedUserID: getAuthAuthorizedUserIDSelector(state),
    }
}

const ProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus,
        savePhoto,
        saveProfile,
    }),
    withRouter2,
    withAuthRedirect
)(ProfileAPIContainer)

export default ProfileContainer
