import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppStateType} from "../../../redux/reduxStore";
import {Nullable} from "../../../types/Nullable";
import {
    getAuthAuthorizedUserIDSelector,
    getAuthIsAuthSelector,
    getProfilePageProfileSelector,
    getProfilePageStatusSelector
} from "../../../selectors";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../../redux/profileReducer";
import {withAuthRedirect, withRouter2} from "../../../utils";
import {MapStateToPropsProfileType, ProfileContainerPropsType} from "./types";

class ProfileAPIContainer extends React.Component<ProfileContainerPropsType> {

    refreshProfile() {
        let userId: Nullable<string> = this.props.userId
        if (!userId) {
            userId = this.props.authorizedUserID;
            if (!userId) {
                //@ts-ignore
                this.props.history.push(PATH.LOGIN)
            }
        }

        if (!userId) {
            throw new Error("ID should be exists")
        } else {
            this.props.getUserProfile(userId)
            this.props.getUserStatus(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.userId !== prevProps.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile
                {...this.props}
                isOwner={!this.props.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhoto}
                saveProfile={this.props.saveProfile}
            />
        )
    }
}

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
