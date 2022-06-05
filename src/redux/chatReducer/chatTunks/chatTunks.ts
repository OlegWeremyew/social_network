import { Dispatch } from 'redux';

import { chatApi } from '../../../Api';
import { ReadyStatusType } from '../../../Api/chatApi/types';
import { Nullable } from '../../../types/Nullable';
import { chatActions } from '../chatActions';
import { ChatMessageType, ThunkType } from '../types';

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;

const newMessageHandlerCreator = (dispatch: Dispatch): any => {
  if (_newMessageHandler === null) {
    _newMessageHandler = messages => {
      dispatch(chatActions.messagesReceived(messages));
    };
  }

  return _newMessageHandler;
};

let _statusChangedHandler: Nullable<(status: ReadyStatusType) => void> = null;

const statusChangedHandlerCreator = (dispatch: Dispatch): any => {
  if (_statusChangedHandler === null) {
    _statusChangedHandler = status => {
      dispatch(chatActions.statusChanged(status));
    };
  }

  return _statusChangedHandler;
};

// thunks
export const startMessagesListening = (): ThunkType => async (dispatch: Dispatch) => {
  chatApi.start();
  chatApi.subscribe('messages-received', newMessageHandlerCreator(dispatch));
  chatApi.subscribe('status-changed', statusChangedHandlerCreator(dispatch));
};

export const stopMessagesListening = (): ThunkType => async (dispatch: Dispatch) => {
  chatApi.unSubscribe('messages-received', newMessageHandlerCreator(dispatch));
  chatApi.unSubscribe('status-changed', statusChangedHandlerCreator(dispatch));
  chatApi.stop();
};

export const sendMessage =
  (message: string): ThunkType =>
  async (dispatch: Dispatch) => {
    chatApi.sendMessage(message);
  };
