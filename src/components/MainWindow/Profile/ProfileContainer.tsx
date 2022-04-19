import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from "redux";

import {
    getUserStatus,
    getUserProfile,
    ProfileType,
    updateUserStatus, savePhoto, saveProfile
} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/reduxStore";
import {InjectedProps, withRouter2} from "../../../hoc/withRouter/withRouter";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect/withAuthRedirect";
import {Nullable} from "../../../types/Nullable";
import {getProfilePageProfileSelector, getProfilePageStatusSelector} from "../../../selectors/profileSelectors";
import {getAuthAuthorizedUserIDSelector, getAuthIsAuthSelector} from "../../../selectors/authSelectors";

class ProfileAPIContainer extends React.Component<ProfilePropsType> {

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

    componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any) {
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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
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

//types===

type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
    status: string
    authorizedUserID: Nullable<string>
}

type MapDispatchToProps = {
    getUserProfile: (userId: Nullable<string>) => void
    getUserStatus: (userId: Nullable<string>) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: (formData: ProfileType) => Promise<any>
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToProps & InjectedProps

