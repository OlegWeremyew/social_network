import {ChatMessageType} from "../../../redux/chatReducer";

export type MessagesReceivedSubscriberType = (messages: ChatMessageType[]) => void
export type StatusChangedSubscriberType = (status: ReadyStatusType) => void

export type EventNamesType = 'messages-received' | 'status-changed'

export type CallBackType = MessagesReceivedSubscriberType | StatusChangedSubscriberType

export type ReadyStatusType = 'pending' | 'ready' | 'error'