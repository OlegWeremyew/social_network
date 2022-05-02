import React, {useEffect, useRef, useState} from 'react';
import style from './Messages.module.css';
import {useSelector} from "react-redux";

import {Message} from "./Message/Message";
import {ChatMessageType} from "../../../../redux/chatReducer";
import {getChatMessagesSelector} from "../../../../selectors/chatSelectors";

export const Messages: React.FC = () => {

    const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false)

    const messages: ChatMessageType[] = useSelector(getChatMessagesSelector)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)

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
        <div className={style.chat__item} onScroll={scrollHandler}>
            {
                messages.map((message) => {
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
