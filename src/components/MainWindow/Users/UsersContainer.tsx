import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    UserType
} from "../../../redux/usersReducer";
import Users from './Users';
import Preloader from "../../../common/Preloader/Preloader";
import {usersAPI} from "../../../Api/api";

type MapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchToProps = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToProps


class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {

         this.props.toggleIsFetching(true)
         usersAPI.getUsers(1, this.props.pageSize)
             .then(data => {
                 this.props.toggleIsFetching(false)
                 this.props.setUsers(data.items)
                 this.props.setTotalUsersCount(data.totalCount)
             })

    }

     onPageChanged = (pageNumber: number) => {
         this.props.setCurrentPage(pageNumber)
         this.props.toggleIsFetching(true)
         usersAPI.getUsers(pageNumber, this.props.pageSize)
             .then(data => {
                 this.props.setUsers(data.items)
                 this.props.toggleIsFetching(false)
             })
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
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export let UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersAPIComponent)