import { ResultCodesEnum } from 'Api/enums';
import { UserType } from 'redux/usersReducer/types';
import { Nullable } from 'types/Nullable';

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D;
  resultCode: RC;
  messages: string[];
};

export type GetItemType = {
  items: Array<UserType>;
  totalCount: number;
  error: Nullable<string>;
};
