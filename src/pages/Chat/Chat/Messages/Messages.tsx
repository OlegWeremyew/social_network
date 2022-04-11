import React, {useEffect, useRef, useState} from 'react';
import {Message} from "./Message/Message";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/reduxStore";
import {ChatMessageType} from "../../../../redux/chatReducer";

export const Messages: React.FC = () => {

    const messages = useSelector<AppStateType, ChatMessageType[]>(state => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget
        if (Math.abs(element.scrollHeight - element.scrollTop) - element.clientHeight < 300) {
            !isAutoScroll && setIsAutoScroll(true)
        } else {
            isAutoScroll && setIsAutoScroll(false)
        }
    }

    useEffect(() => {
        if (isAutoScroll) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])

    return (
        <div
            style={{height: "400px", overflowY: 'auto'}}
            onScroll={scrollHandler}
        >
            {
                messages.map((message, index) => {
                    return (
                        <Message
                            key={message.id}
                            message={message}
                        />
                    )
                })
            }
            <div ref={messagesAnchorRef}>

            </div>
        </div>
    )
}
