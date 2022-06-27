import { APIResponseType, GetItemType } from '../types';

import { instance } from 'Api/apiConfig';
import { EMPTY_STRING } from 'constants/variables';
import { Nullable } from 'types/Nullable';

export const usersAPI = {
  getUsers(
    currentPage: number = 1,
    pageSize: number = 5,
    term: string = EMPTY_STRING,
    friend: Nullable<boolean> = null,
  ) {
    const endpoint = `users?page=${currentPage}&count=${pageSize}&term=${term}${
      friend === null ? EMPTY_STRING : `&friend=${friend}`
    }`;
    return instance.get<GetItemType>(endpoint).then(res => res.data);
  },
  follow(userId: string) {
    const endpoint = `follow/${userId}`;
    return instance.post<APIResponseType>(endpoint).then(res => res.data);
  },
  unfollow(userId: string) {
    const endpoint = `follow/${userId}`;
    return instance.delete<APIResponseType>(endpoint).then(res => res.data);
  },
};
