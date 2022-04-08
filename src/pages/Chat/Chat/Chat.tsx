import React, {useEffect, useState} from 'react';
import {Messages} from "./Messages/Messages";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";
import {Nullable} from "../../../types/Nullable";

export const Chat: React.FC = () => {

    const [wsChanel, setWsChanel] = useState<Nullable<WebSocket>>()

    useEffect(() => {
        let ws: WebSocket

        const closeHandler = () => setTimeout(createChanel, 3000)

        function createChanel() {

            ws?.removeEventListener('close', closeHandler)
            ws?.close()

            ws = (new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'))
            ws.addEventListener('close', closeHandler)

            setWsChanel(ws)
        }

        createChanel()
    }, [])

    return (
        <>
            <Messages wsChanel={wsChanel}/>
            <AddMessageForm wsChanel={wsChanel}/>
        </>
    )
}

//types
export type ChatWSType = {
    wsChanel: Nullable<WebSocket> | undefined
}

