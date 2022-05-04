import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {PATH} from "../../enums";
import {mapStateToPropsType} from "./types";
import {getAuthIsAuthSelector} from "../../selectors";

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: getAuthIsAuthSelector(state)
    }
}

export function withAuthRedirect<T>(WrappedComponent: React.ComponentType<T>) {
    const RedirectComponent = (props: mapStateToPropsType) => {

        const {isAuth, ...restProps} = props

        if (!isAuth) {
            return <Navigate to={PATH.LOGIN}/>
        }
        return <WrappedComponent {...restProps as T} />
    }
    return connect(mapStateToProps)(RedirectComponent)
}
