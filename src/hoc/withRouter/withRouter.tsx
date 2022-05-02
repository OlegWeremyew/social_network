import React from "react";
import {useLocation, useParams} from "react-router-dom";
import {WrappedComponentWithRouterPropsType} from "./types";

export const withRouter = (WrappedComponent: typeof React.Component) => (props: WrappedComponentWithRouterPropsType) => {

    const params = useParams<'userId'>();
    const location = useLocation()

    return (

        <WrappedComponent
            {...props}
            userId={params.userId}
            location={location}
        />
    )
}

export const withRouter2 = <T  extends object> (WrappedComponent: React.ComponentType<T>) => (props: T) => {

    const params = useParams<'userId'>();
    const location = useLocation()
    return (

        <WrappedComponent
            {...props as T}
            userId={params.userId}
            location={location}
        />
    )
}
