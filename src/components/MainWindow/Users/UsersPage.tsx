import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {Users} from './Users';
import {Preloader} from "../../../common/Preloader/Preloader";
import {getIsFetching} from "../../../redux/usersSelectors";


const UsersPage: React.FC = () => {

    const isFetching = useSelector<AppStateType, boolean>(getIsFetching)

    return (
        <>
            {isFetching ? <Preloader/> : null}
            <Users/>
        </>
    )
}

export default UsersPage
