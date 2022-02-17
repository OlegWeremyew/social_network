import React from 'react';
import c from "./Paginator.module.css"

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}: UsersPropsType) => {

    const pagesCount = (Math.ceil(totalUsersCount / pageSize)) / 200
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span key={p} className={(currentPage) === p ? c.selectedPage : ""}
                             onClick={() => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
    );
};
