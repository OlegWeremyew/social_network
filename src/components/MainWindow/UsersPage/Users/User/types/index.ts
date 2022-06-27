import { UserType } from 'redux/usersReducer/types';

export type UsersPropsType = {
  user: UserType;
  followingInProgress: string[];
};
