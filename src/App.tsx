import React from 'react';
import style from './App.module.scss';
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {connect, Provider} from "react-redux";

import {AppStateType, store} from "./redux/reduxStore";
import {initializeApp} from "./redux/AppReducer";
import {Preloader} from "./common/Preloader/Preloader";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {PATH} from "./utils/RouterPath/RouterPath";
import Loading from "./common/Loading/Loading";

const DialogsContainer = React.lazy(() => import('./components/MainWindow/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/MainWindow/Profile/ProfileContainer'))
const UsersPage = React.lazy(() => import('./components/MainWindow/Users/UsersPage'))
const Login = React.lazy(() => import('./components/Login/Login'))
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'))
const News = React.lazy(() => import('./components/MainWindow/News/News'))

class App extends React.Component<AppContainerType, AppContainerType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <main className={style.appContent}>
                <Header/>
                <Navbar/>
                <div className={style.appContentWindow}>
                    <Routes>
                        <Route path={PATH.MAIN_PAGE} element={<Navigate to={PATH.PROFILE}/>}/>

                        <Route path={PATH.PROFILE} element={<ProfileContainer/>}>
                            <Route path=":userId" element={<ProfileContainer/>}/>
                        </Route>

                        <Route path={PATH.DIALOGS} element={<DialogsContainer/>}>
                            <Route path=":userId" element={<DialogsContainer/>}/>
                        </Route>

                        <Route path={PATH.USERS} element={<UsersPage/>}/>
                        <Route path={PATH.NEWS} element={<News/>}/>
                        <Route path={PATH.LOGIN} element={<Login/>}/>
                        <Route path={PATH.CHAT} element={<ChatPage/>}/>
                        <Route path={PATH.PAGE_NOTE_FOUND} element={<PageNotFound/>}/>
                    </Routes>
                </div>
                <Footer/>
            </main>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

const AppContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    initializeApp,
})(App)

export const MainApp = () => {
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


//Types=====================================================================

type mapStateToPropsType = {
    initialized: boolean
}

type mapDispatchToPropsType = {
    initializeApp: () => void
}

type AppContainerType = mapStateToPropsType & mapDispatchToPropsType
