import React, {useEffect, useState} from 'react';
import styles from "./Paginator.module.css"
import cn from 'classnames'

type UsersPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

export const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}: UsersPropsType) => {

    const pagesCount = (Math.ceil(totalItemsCount / pageSize))
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize))
    }, [currentPage])

    return (
        <div className={cn(styles.paginator)}>
            {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>
                PREV
            </button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return (
                        <span className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                              key={p}
                              onClick={(e) => onPageChanged(p)}>
                            {p}
                        </span>
                    )
                })}
            {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)
            }>
                NEXT
            </button>}
        </div>
    )
};
