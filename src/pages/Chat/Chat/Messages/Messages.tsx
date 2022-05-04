import React, {useEffect, useRef, useState} from 'react';
import style from './Messages.module.css';
import {useDispatch, useSelector} from "react-redux";

import {Message} from "./Message/Message";
import {ReturnComponentType} from "../../../../types/ReturnComponentType";
import {ChatMessageType} from "../../../../redux/chatReducer/types";
import {getChatMessagesSelector} from "../../../../selectors";

export const Messages: React.FC = (): ReturnComponentType => {

    const dispatch = useDispatch()
    const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false)

    const messages: ChatMessageType[] = useSelector(getChatMessagesSelector)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)

    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>): void => {

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
    }, [dispatch, messages, isAutoScroll])

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
