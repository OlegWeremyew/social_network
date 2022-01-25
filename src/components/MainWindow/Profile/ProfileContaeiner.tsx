import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/reduxStore";
import {compose} from "redux";
import {InjectedProps, withRouter2} from "../../../common/withRouter/withRouter";

type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToProps = {
    getUserProfile: (userId: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps & InjectedProps

class ProfileAPIContainer extends React.Component<UsersPropsType> {

    componentDidMount() {

        let userId: string = this.props.userId
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(+userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}


export const ProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, {
        getUserProfile,
    }),
    withRouter2)(ProfileAPIContainer);