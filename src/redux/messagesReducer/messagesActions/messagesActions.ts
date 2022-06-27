import { UserReducerEnum } from 'redux/messagesReducer/constants';

export const MessageActions = {
  addMessage: (newMessageText: string) =>
    ({ type: UserReducerEnum.ADD_MESSAGE, payload: { newMessageText } } as const),
  deleteMessage: (messageId: number) =>
    ({ type: UserReducerEnum.DELETED_MESSAGE, payload: { messageId } } as const),
};
