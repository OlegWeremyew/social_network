import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserStatus,
    getUserProfile,
    ProfileType,
    updateUserStatus, savePhoto
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
    savePhoto: (file: any) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps & InjectedProps

class ProfileAPIContainer extends React.Component<UsersPropsType> {

    refreshProfile() {
        let userId: string = this.props.userId
        if (!userId) {
            userId = this.props.authorizedUserID;
            if (!userId) {
                //@ts-ignore
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<UsersPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.userId !== prevProps.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile
                isOwner={!this.props.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhoto}

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

const ProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus,
        savePhoto,
    }),
    withRouter2,
    withAuthRedirect
)(ProfileAPIContainer);

export default ProfileContainer
