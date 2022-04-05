import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {
    FilterType,
    requestUsers, UserActions,
    UserType
} from "../../../redux/usersReducer";
import {Users} from './Users';
import {Preloader} from "../../../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers, getUsersFilter
} from "../../../redux/usersSelectors";

class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        const {currentPage, pageSize, filter} = this.props
        this.props.requestUsers(currentPage, pageSize, filter)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props
        this.props.requestUsers(pageNumber, pageSize, filter)
    }

    onFilterChanged = (filter: FilterType) => {
        const {pageSize} = this.props
        this.props.requestUsers(1, pageSize, filter)
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
                    onFilterChanged={this.onFilterChanged}
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
        filter: getUsersFilter(state),
    }
}

let UsersContainer = compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToProps, {}, AppStateType>(mapStateToProps, {
        followSuccess: UserActions.followSuccess,
        unfollowSuccess: UserActions.unfollowSuccess,
        setCurrentPage: UserActions.setCurrentPage,
        requestUsers,
    })
)(UsersAPIComponent)

export default UsersContainer

//types==========
type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
    filter: FilterType
}

type MapDispatchToProps = {
    followSuccess: (userID: string) => void
    unfollowSuccess: (userID: string) => void
    setCurrentPage: (currentPage: number) => void
    requestUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps