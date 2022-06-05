import React from 'react';
import style from './UsersPage.module.scss'

import {useSelector} from "react-redux";
import {ReturnComponentType} from "../../../types/ReturnComponentType";
import {Preloader} from "../../../common";
import {getIsFetching} from "../../../selectors";
import {Users} from "./Users";

const UsersPage = (): ReturnComponentType => {

    const isFetching: boolean = useSelector(getIsFetching)

    return (
        <section className={style.page}>
            {isFetching ? <Preloader/> : null}
            <Users/>
        </section>
    )
}

export default UsersPage
