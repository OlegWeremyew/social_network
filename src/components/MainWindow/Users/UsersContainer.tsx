import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    unFollow,
    UserType
} from "../../../redux/usersReducer";
import axios from "axios";
import Users from './Users';

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


class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <Users
                totalUsersCount = {this.props.totalUsersCount}
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        onPageChanged = {this.onPageChanged}
        users = {this.props.users}
        follow = {this.props.follow}
        unfollow = {this.props.unfollow}
        />
    )
        ;
    }
}

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
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsers(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCount(totalCount))
        },
    }
}

export let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)