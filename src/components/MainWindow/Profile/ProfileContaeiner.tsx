import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserStatus,
    getUserProfile,
    ProfileType,
    updateUserStatus
} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/reduxStore";
import {compose} from "redux";
import {InjectedProps, withRouter2} from "../../../hoc/withRouter/withRouter";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect/withAuthRedirect";

type MapStateToPropsType = {
    profile: ProfileType
    isAuth: boolean
    status: string
    authorizedUserID: string
}
type MapDispatchToProps = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps & InjectedProps

class ProfileAPIContainer extends React.Component<UsersPropsType> {

    componentDidMount() {

        let userId: string = this.props.userId
        if (!userId) {
            userId = this.props.authorizedUserID;
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {

        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}

            />
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        authorizedUserID: state.auth.data.userId,
    }
}

export const ProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus,
    }),
    withRouter2,
    withAuthRedirect
)(ProfileAPIContainer);
