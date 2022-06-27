import { messagesArray, usersArray } from './constants';

import { UserReducerEnum } from 'redux/messagesReducer/constants';
import {
  ActionMessageTypes,
  initialStateMessagesType,
  MessageType,
  UserType,
} from 'redux/messagesReducer/types';

export const initialMessagesState = {
  users: usersArray as Array<UserType>,
  messages: messagesArray as Array<MessageType>,
};

export const messagesReducer = (
  state: initialStateMessagesType = initialMessagesState,
  action: ActionMessageTypes,
): initialStateMessagesType => {
  switch (action.type) {
    case UserReducerEnum.ADD_MESSAGE: {
      const newMessage: MessageType = {
        id: new Date().getTime(),
        message: action.payload.newMessageText,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }
    case UserReducerEnum.DELETED_MESSAGE: {
      return {
        ...state,
        messages: state.messages.filter(f => f.id !== action.payload.messageId),
      };
    }
    default:
      return state;
  }
};
