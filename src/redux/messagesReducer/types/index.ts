import { MessageActions } from 'redux/messagesReducer';
import { initialMessagesState } from 'redux/messagesReducer/messagesReducer/messagesReducer';
import { InferActionTypes } from 'redux/types';

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
