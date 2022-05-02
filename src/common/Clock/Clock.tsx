import React, {useEffect, useState} from 'react';
import {ReturnComponentType} from "../../types/ReturnComponentType";

const get2DigitsString = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<PropsType> = (): ReturnComponentType => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    const secondsStrings = get2DigitsString(date.getSeconds())

    const minutesStrings = get2DigitsString(date.getMinutes())

    const hoursStrings = get2DigitsString(date.getHours())

    return (
        <div>
            <span>
                {hoursStrings}
            </span>
            :
            <span>
                {minutesStrings}
            </span>
            :
            <span>
                {secondsStrings}
            </span>
        </div>
    )
}

//type
type PropsType = {}
