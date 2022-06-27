import { ChatMessageAPIType } from 'pages/Chat/types';
import { chatActions } from 'redux/chatReducer';
import { initialChatState } from 'redux/chatReducer/chatReducer/chatReducer';
import { BaseThunkType, InferActionTypes } from 'redux/types';

export type ThunkType = BaseThunkType<ActionChatTypes>;

export type initialStateType = typeof initialChatState;

export type ActionChatTypes = InferActionTypes<typeof chatActions>;

export type ChatMessageType = ChatMessageAPIType & { id: string };
