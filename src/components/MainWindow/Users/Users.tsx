import React from 'react';
import c from "./Users.module.css";
import user from "../../../assets/images/user.png";
import {UserType} from "../../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    toggleFollowingProgress: (followingInProgress: boolean, userId: number) => void
    followingInProgress: Array<any>
}

const Users = (props: UsersPropsType) => {

    let pagesCount = (Math.ceil(props.totalUsersCount / props.pageSize)) / 200

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {

                    return <span key={p} className={(props.currentPage) === p ? c.selectedPage : ""}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.users.map(m => <div key={m.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + m.id}>
                            <img src={m.photos.small !== null ? m.photos.small : user} className={c.userPhoto}
                                 alt="photo"/>
                                </NavLink>
                        </div>
                        <div>
                            {
                                m.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === m.id)}
                                              onClick={() => {
                                                  props.unfollow(m.id)
                                              }}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === m.id)}
                                              onClick={() => {
                                                  props.follow(m.id)
                                              }}>Follow</button>
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