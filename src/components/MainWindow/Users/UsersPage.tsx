import React from 'react';
import style from './Users.module.scss'

import {useSelector} from "react-redux";
import {Users} from './Users';
import {ReturnComponentType} from "../../../types/ReturnComponentType";
import {Preloader} from "../../../common";
import {getIsFetching} from "../../../selectors";


const UsersPage: React.FC = (): ReturnComponentType => {

    const isFetching: boolean = useSelector(getIsFetching)

    return (
        <section className={style.page}>
            {isFetching ? <Preloader/> : null}
            <Users/>
        </section>
    )
}

export default UsersPage
