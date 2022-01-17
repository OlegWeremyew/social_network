import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/reduxStore";

type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToProps = {
    setUserProfile: (profile: ProfileType) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

class ProfileContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/proile/2`)
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
        profile: state.profilePage.profile
    }
}


export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);