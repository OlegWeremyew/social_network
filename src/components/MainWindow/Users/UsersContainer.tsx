import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {
    followSuccess,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollowSuccess,
    UserType
} from "../../../redux/usersReducer";
import Users from './Users';
import Preloader from "../../../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../../redux/usersSelectors";

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<any>
}

type MapDispatchToProps = {
    followSuccess: (userID: string) => void
    unfollowSuccess: (userID: string) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps


class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.followSuccess}
                    unfollow={this.props.unfollowSuccess}
                    followingInProgress={this.props.followingInProgress}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export let UsersContainer = compose<ComponentType>(
    connect(mapStateToProps, {
        followSuccess,
        unfollowSuccess,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers,
    })
)(UsersAPIComponent)