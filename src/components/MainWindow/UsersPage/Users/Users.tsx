import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Paginator } from '../../../../common';
import { requestUsers } from '../../../../redux/usersReducer';
import { FilterType } from '../../../../redux/usersReducer/types';

import { queryObjType } from './types';
import { User } from './User';
import style from './Users.module.scss';
import { UsersSearchForm } from './UsersSearchForm';

import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers,
  getUsersFilter,
} from 'selectors/usersSelectors/usersSelectors';

export const Users: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const parsedPage = searchParams.get('page');
  const parsedTerm = searchParams.get('term');
  const parsedFriend = searchParams.get('friend');

  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const filter = useSelector(getUsersFilter);
  const users = useSelector(getUsers);
  const followingInProgress = useSelector(getFollowingInProgress);
  const pageValue = 1;

  const onPageChanged = (pageNumber: number): void => {
    dispatch(requestUsers(pageNumber, pageSize, filter));
  };

  const onFilterChanged = (filter: FilterType): void => {
    dispatch(requestUsers(pageValue, pageSize, filter));
  };

  useEffect(() => {
    let actualPage = currentPage;
    let actualFilter = filter;

    if (parsedPage) actualPage = Number(parsedPage);
    if (parsedTerm) actualFilter = { ...actualFilter, term: parsedTerm as string };

    switch (parsedFriend) {
      case 'null':
        actualFilter = { ...actualFilter, friend: null };
        break;
      case 'true':
        actualFilter = { ...actualFilter, friend: true };
        break;
      case 'false':
        actualFilter = { ...actualFilter, friend: false };
        break;
    }

    dispatch(requestUsers(actualPage, pageSize, actualFilter));
  }, []);

  useEffect(() => {
    const query = {} as queryObjType;

    if (parsedTerm) query.term = parsedTerm;
    if (currentPage !== pageValue) query.page = String(currentPage);
    if (parsedFriend !== null) query.friends = String(parsedFriend);

    const navigatePath = `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`;
    navigate(navigatePath);
  }, [filter, currentPage]);

  return (
    <div className={style.users}>
      <UsersSearchForm onFilterChanged={onFilterChanged} />
      <div className={style.searchResult}>
        {users.map(user => (
          <div key={user.id}>
            <User user={user} followingInProgress={followingInProgress} />
          </div>
        ))}
      </div>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
    </div>
  );
};
