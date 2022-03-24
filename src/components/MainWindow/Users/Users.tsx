import React from 'react';
import {FilterType, UserType} from "../../../redux/usersReducer";
import {Paginator} from "../../../common/Paginator/Paginator";
import {User} from "./User";
import {UsersSearchForm} from "./UsersSearchForm/UsersSearchForm";

export const Users: React.FC<UsersPropsType> = ({
                                                    totalUsersCount,
                                                    pageSize,
                                                    currentPage,
                                                    onPageChanged,
                                                    users,
                                                    follow,
                                                    unfollow,
                                                    followingInProgress,
                                                    onFilterChanged,
                                                }) => {

    return (
        <div>
            <h2>Users</h2>
            <UsersSearchForm
                onFilterChanged={onFilterChanged}
            />
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
            {
                users.map(u => <User
                        key={u.id}
                        user={u}
                        follow={follow}
                        unfollow={unfollow}
                        followingInProgress={followingInProgress}
                    />
                )
            }
        </div>
    )
}


//types================

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    onFilterChanged: (filter: FilterType) => void

    users: Array<UserType>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    followingInProgress: Array<string>
}
