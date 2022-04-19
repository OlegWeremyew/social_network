import React from 'react';
import style from './Users.module.scss'

import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {Users} from './Users';
import {Preloader} from "../../../common/Preloader/Preloader";
import {getIsFetching} from "../../../selectors/usersSelectors";


const UsersPage: React.FC = () => {

    const isFetching = useSelector<AppStateType, boolean>(getIsFetching)

    return (
        <section className={style.page}>
            {isFetching ? <Preloader/> : null}
            <Users/>
        </section>
    )
}

export default UsersPage
