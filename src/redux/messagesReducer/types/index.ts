import { InferActionTypes } from '../../types';
import { MessageActions } from '../messagesActions';
import { initialMessagesState } from '../messagesReducer/messagesReducer';

export type ActionMessageTypes = InferActionTypes<typeof MessageActions>;

export type initialStateMessagesType = typeof initialMessagesState;

export type UserType = {
  name: string;
  id: number;
  img: string;
};

export type MessageType = {
  message: string;
  id: number;
};
