import React, {useEffect} from 'react';
import style from './Users.module.scss'

import {FilterType, requestUsers, UserType} from "../../../redux/usersReducer";
import {Paginator} from "../../../common/Paginator/Paginator";
import {User} from "./User/User";
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
} from "../../../selectors/usersSelectors";
import {useNavigate, useSearchParams} from "react-router-dom";

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

    useEffect(() => {

        const query = {} as queryObjType

        if (!!parsedTerm) query.term = parsedTerm
        if (currentPage !== 1) query.page = String(currentPage)
        if (parsedFriend !== null) query.friends = String(parsedFriend)

        navigate(`?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`)

    }, [filter, currentPage])

    return (
        <div className={style.users}>
            <UsersSearchForm
                onFilterChanged={onFilterChanged}
            />
            <div  className={style.searchResult}>
                {
                    users.map(user => {
                            return (
                                <div key={user.id}>
                                    <User
                                        user={user}
                                        followingInProgress={followingInProgress}
                                    />
                                </div>
                            )
                        }
                    )
                }
            </div>
            <Paginator
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
        </div>
    )
}

//types====

type queryObjType = {
    term: string
    page: string
    friends: string
}
