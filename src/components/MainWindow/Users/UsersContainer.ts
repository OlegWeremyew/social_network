import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unFollowAC, userType} from "../../../redux/usersReducer";

type MapStateToPropsType = {
    usersPage: Array<userType>
}

type MapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: userType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers : (users: userType) => {
            dispatch(setUsersAC(users))
        }
    }
}


export let UsersContainer: any = connect(mapStateToProps, mapDispatchToProps)(Users)