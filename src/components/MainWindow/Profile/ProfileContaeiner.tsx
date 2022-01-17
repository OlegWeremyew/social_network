import React, {ComponentType} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {addPost, ProfileType, setUserProfile, updateNewPostText} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/reduxStore";
import {compose} from "redux";
import {InjectedProps, withRouter2} from "../../../common/withRouter/withRouter";

type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToProps = {
    setUserProfile: (profile: ProfileType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps & InjectedProps

class ProfileAPIContainer extends React.Component<UsersPropsType> {

    componentDidMount() {

        let userId: string = this.props.userId
        if (!userId) {
            userId = '2';
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
        setUserProfile,
        addPost,
        updateNewPostText,
    }),
    withRouter2)(ProfileAPIContainer);