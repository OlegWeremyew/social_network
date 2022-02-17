import React from 'react';
import c from "./Users.module.css";
import user from "../../../assets/images/user.png";
import {UserType} from "../../../redux/usersReducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../../../common/Paginator/Paginator";
import {User} from "./User";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

    users: Array<UserType>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    followingInProgress: Array<any>
}

export const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, ...props}: UsersPropsType) => {

    return (
        <div>
            <Paginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
            {
                props.users.map(u => <User
                        key={u.id}
                        user={u}
                        follow={props.follow}
                        unfollow={props.unfollow}
                        followingInProgress={props.followingInProgress}
                    />
                )}
        </div>
    );
};
