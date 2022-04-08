import {ChatMessageType} from "../pages/Chat/ChatPage";
import {Nullable} from "../types/Nullable";

let subscribers = [] as SubscriberType[]
let ws: Nullable<WebSocket>

const closeHandler = () => setTimeout(createChanel, 3000)

const messageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers.forEach(subscriber => subscriber(newMessages))
}

export function createChanel() {
    ws?.removeEventListener('close', closeHandler)
    ws?.close()
    ws = (new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'))
    ws.addEventListener('message', messageHandler)
}

export const chatApi = {
    subscribe(callback: SubscriberType) {
        subscribers.push(callback)
        return () => {
            subscribers = subscribers.filter(subscriber => subscriber !== callback)
        }
    },
    unSubscribe(callback: SubscriberType) {
        subscribers = subscribers.filter(subscriber => subscriber !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message)
    },
    start() {
        createChanel()
    },
    stop() {
        subscribers = []
        ws?.removeEventListener('close', closeHandler)
        ws?.removeEventListener('message', messageHandler)
        ws?.close()
    },
}

//type

export type SubscriberType = (messages: ChatMessageType[]) => void