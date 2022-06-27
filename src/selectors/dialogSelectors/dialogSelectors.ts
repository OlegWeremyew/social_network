import { initialStateMessagesType } from 'redux/messagesReducer/types';
import { AppStateType } from 'redux/types';

export const getMessagesPageSelector = (state: AppStateType): initialStateMessagesType =>
  state.messagesPage;
