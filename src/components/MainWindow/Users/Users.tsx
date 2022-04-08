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
import {useNavigate, useSearchParams} from "react-router-dom";
import * as queryString from "querystring";

export const Users: React.FC = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

    const parsedPage = searchParams.get('page')
    const parsedTerm = searchParams.get('term')
    const parsedFriend = searchParams.get('friend')

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

        const query = {} as queryObjType

        if(!!parsedTerm) query.term = parsedTerm
        if(currentPage !== 1) query.page = String(currentPage)
        if(parsedFriend !== null) query.friends = String(parsedFriend)

        navigate({
            pathname: `/users`,
            search: queryString.stringify(query),
        })
    }, [filter, currentPage])

    useEffect(() => {
        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsedPage) actualPage = Number(parsedPage)

        if (!!parsedTerm) actualFilter = {...actualFilter, term: parsedTerm as string}

        switch (parsedFriend) {
            case "null" :
                actualFilter = {...actualFilter, friend: null}
                break
            case "true" :
                actualFilter = {...actualFilter, friend: true}
                break
            case "false" :
                actualFilter = {...actualFilter, friend: false}
                break
        }

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    return (
        <div>
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

//types====

type queryObjType = {
    term: string
    page: string
    friends: string
}
