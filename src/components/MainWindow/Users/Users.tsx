import React from 'react';
import c from "./Users.module.css";
import user from "../../../assets/images/user.png";
import {UserType} from "../../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../Api/api";
import axios from "axios";

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

    let pagesCount = (Math.ceil(props.totalUsersCount / props.pageSize)) / 200

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
                            <NavLink to={"/profile/" + m.id}>
                            <img src={m.photos.small !== null ? m.photos.small : user} className={c.userPhoto}
                                 alt="photo"/>
                                </NavLink>
                        </div>
                        <div>
                            {
                                m.followed
                                    ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "f5a121b3-d5d2-4866-a73a-ab1418f0e4d8"
                                            },
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(m.id)
                                                }
                                            })
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "f5a121b3-d5d2-4866-a73a-ab1418f0e4d8"
                                            },
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(m.id)
                                                }
                                            })
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