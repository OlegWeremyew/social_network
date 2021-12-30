import React from 'react';
import {store} from "./redux/reduxStore";

export const StoreContext: any = React.createContext(null)

export const Provider = (props: any) => {
    return (
        <StoreContext.Provider value = {props.store} >
            {props.child}
            </StoreContext.Provider>
    )
}