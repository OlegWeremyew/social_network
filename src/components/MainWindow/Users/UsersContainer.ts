import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";
import {followAC, initialStateType, setUsersAC, unFollowAC, UserType} from "../../../redux/usersReducer";

type MapStateToPropsType = {
    usersPage: initialStateType
}

type MapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.users
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
        setUsers : (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export let UsersContainer: any = connect(mapStateToProps, mapDispatchToProps)(Users)