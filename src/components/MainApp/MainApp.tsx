import React from "react";
import {Loading} from "../../common";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../redux/reduxStore";
import {ReturnComponentType} from "../../types/ReturnComponentType";
import {AppContainer} from "./AppContainer";

export const MainApp = (): ReturnComponentType => {
    return (
        <React.Suspense fallback={<Loading/>}>
            <HashRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </HashRouter>
        </React.Suspense>
    )
}
