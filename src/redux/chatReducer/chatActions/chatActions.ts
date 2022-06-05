import { ReadyStatusType } from '../../../Api/chatApi/types';
import { ChatReducerEnum } from '../constants';
import { ChatMessageType } from '../types';

export const chatActions = {
  messagesReceived: (messages: ChatMessageType[]) =>
    ({
      type: ChatReducerEnum.MESSAGES_RECEIVED,
      payload: { messages },
    } as const),
  statusChanged: (status: ReadyStatusType) =>
    ({
      type: ChatReducerEnum.STATUS_CHANGED,
      payload: { status },
    } as const),
};
