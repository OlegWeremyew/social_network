import React from 'react';
import style from './Users.module.css'

import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {Users} from './Users';
import {Preloader} from "../../../common/Preloader/Preloader";
import {getIsFetching} from "../../../redux/usersSelectors";


const UsersPage: React.FC = () => {

    const isFetching = useSelector<AppStateType, boolean>(getIsFetching)

    return (
        <div className={style.page}>
            {isFetching ? <Preloader/> : null}
            <Users/>
        </div>
    )
}

export default UsersPage
