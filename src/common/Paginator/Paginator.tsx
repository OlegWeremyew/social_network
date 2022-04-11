import React, {useEffect, useState} from 'react';
import styles from "./Paginator.module.css"
import cn from 'classnames'
import style from "../../components/MainWindow/Users/User/User.module.css";

export const Paginator: React.FC<UsersPropsType> = ({
                                                        totalItemsCount,
                                                        pageSize,
                                                        currentPage,
                                                        onPageChanged,
                                                        portionSize = 10
                                                    }) => {

    const pagesCount = (Math.ceil(totalItemsCount / pageSize))
    const pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    useEffect(() => {
        setPortionNumber(Math.ceil(currentPage / portionSize))
    }, [currentPage])

    return (
        <div className={cn(styles.paginator)}>
            <div>
                {
                    portionNumber > 1
                    && <div className={style.user__btn}>
                        <button onClick={() => setPortionNumber(portionNumber - 1)}>
                            PREV
                        </button>
                    </div>
                }
            </div>
            <div>
                {
                    pages
                        .filter(p => (p >= leftPortionPageNumber) && (p <= rightPortionPageNumber))
                        .map(p => {
                            return (
                                <span className={cn({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
                                      key={p}
                                      onClick={() => onPageChanged(p)}>
                            {p}
                        </span>
                            )
                        })
                }
            </div>
            <div>
                {
                    portionCount > portionNumber
                    && <div className={style.user__btn}>
                        <button onClick={() => setPortionNumber(portionNumber + 1)}>
                            NEXT
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

// types=========

type UsersPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}
