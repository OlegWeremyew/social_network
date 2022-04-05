import React, {useEffect} from 'react';
import {FilterType, requestUsers, UserType} from "../../../redux/usersReducer";
import {Paginator} from "../../../common/Paginator/Paginator";
import {User} from "./User";
import {UsersSearchForm} from "./UsersSearchForm/UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../../redux/usersSelectors";

export const Users: React.FC = () => {

    const dispatch = useDispatch()

    const totalUsersCount = useSelector<AppStateType, number>(getTotalUsersCount)
    const currentPage = useSelector<AppStateType, number>(getCurrentPage)
    const pageSize = useSelector<AppStateType, number>(getPageSize)
    const filter = useSelector<AppStateType, FilterType>(getUsersFilter)
    const users = useSelector<AppStateType, Array<UserType>>(getUsers)
    const followingInProgress = useSelector<AppStateType, Array<string>>(getFollowingInProgress)



    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    }, [])

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
                        followingInProgress={followingInProgress}
                    />
                )
            }
        </div>
    )
}
