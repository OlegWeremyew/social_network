import {Nullable} from "../types/Nullable";
import {ChatMessageType} from "../redux/chatReducer";

const subscribers = {
    'messages-received': [] as MessagesReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[],
}
let ws: Nullable<WebSocket>

const notifySubscribersAboutStatus = (status: ReadyStatusType) => {
    subscribers['status-changed'].forEach(subscriber => subscriber(status))
}

const closeHandler = () => {
    notifySubscribersAboutStatus('pending')
    setTimeout(createChanel, 3000)
}

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers['messages-received'].forEach(subscriber => subscriber(newMessages))
}

const openHandler = () => {
    notifySubscribersAboutStatus('ready')
}

const errorHandler = () => {
    notifySubscribersAboutStatus('error')
}

const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('error', errorHandler)
}

export function createChanel() {
    cleanUp()
    ws?.close()
    ws = (new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'))
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
    ws.addEventListener('open', openHandler)
    ws.addEventListener('error', errorHandler)
}

export const chatApi = {
    start() {
        createChanel()
    },
    stop() {
        subscribers['messages-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
        ws?.close()
    },
    subscribe(eventName: EventNamesType, callback: CallBackType) {
        // @ts-ignore
        subscribers[eventName].push(callback)
        return () => {
            // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(subscriber => subscriber !== callback)
        }
    },
    unSubscribe(eventName: EventNamesType, callback: CallBackType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(subscriber => subscriber !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    },
}

//type

export type MessagesReceivedSubscriberType = (messages: ChatMessageType[]) => void
export type StatusChangedSubscriberType = (status: ReadyStatusType) => void

type EventNamesType = 'messages-received' | 'status-changed'

type CallBackType = MessagesReceivedSubscriberType | StatusChangedSubscriberType

export type ReadyStatusType = 'pending' | 'ready' | 'error'