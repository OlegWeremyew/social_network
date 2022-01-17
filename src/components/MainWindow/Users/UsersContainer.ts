import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    follow,
    initialStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollow,
    UserType
} from "../../../redux/usersReducer";
import Users from "./Users";

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type MapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (currentPage: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userID: number) => {
            dispatch(follow(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unFollow(userID))
        },
        setUsers : (users: Array<UserType>) => {
            dispatch(setUsers(users))
        },
        setCurrentPage : (currentPage: number) => {
            dispatch(setCurrentPage(currentPage))
        },
        setTotalUsersCount : (totalCount: number) => {
            dispatch(setTotalUsersCount(totalCount))
        },
    }
}


export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)