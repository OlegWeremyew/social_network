import React from 'react';
import c from "./Users.module.css";
import user from "../../../assets/images/user.png";
import {UserType} from "../../../redux/usersReducer";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

const Users = (props: UsersPropsType) => {

    let pagesCount = (Math.ceil(props.totalUsersCount / props.pageSize)) / 450

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? c.selectedPage : ""}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(m => <div key={m.id}>
                    <span>
                        <div>
                            <img src={m.photos.small !== null ? m.photos.small : user} className={c.userPhoto}
                                 alt="photo"/>
                        </div>
                        <div>
                            {
                                m.followed
                                    ? <button onClick={() => props.unfollow(m.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(m.id)}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{m.name}</div>
                            <div>{m.status}</div>
                        </span>
                        <span>
                            <div>{"m.location.country"}</div>
                            <div>{"m.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;