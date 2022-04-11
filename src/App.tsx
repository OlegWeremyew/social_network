import React from 'react';
import style from './App.module.css';
import {BrowserRouter, HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {AppStateType, store} from "./redux/reduxStore";

import News from "./components/MainWindow/News/News";
import Music from "./components/MainWindow/Music/Music";
import Friends from "./components/MainWindow/Friends/Friends";
import Settings from "./components/MainWindow/Settings/Settings";
import HeaderContainer from "./components/Header/HeaderContainer";
import {initializeApp} from "./redux/AppReducer";
import {Preloader} from "./common/Preloader/Preloader";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const DialogsContainer = React.lazy(() => import('./components/MainWindow/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/MainWindow/Profile/ProfileContainer'))
const UsersPage = React.lazy(() => import('./components/MainWindow/Users/UsersPage'))
const Login = React.lazy(() => import('./components/Login/Login'))
const ChatPage = React.lazy(() => import('./pages/Chat/ChatPage'))

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
                <HeaderContainer/>
                <Navbar/>
                <div className={style.appContentWindow}>
                    <Routes>
                        <Route path="/" element={<Navigate to="profile"/>}/>

                        <Route path="/profile/" element={<ProfileContainer/>}>
                            <Route path=":userId" element={<ProfileContainer/>}/>
                        </Route>

                        <Route path="/dialogs/" element={<DialogsContainer/>}>
                            <Route path=":userId" element={<DialogsContainer/>}/>
                        </Route>

                        <Route path="/users/*" element={<UsersPage/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                        <Route path="/friends/*" element={<Friends/>}/>
                        <Route path="/login/*" element={<Login/>}/>
                        <Route path="/chat/*" element={<ChatPage/>}/>
                        <Route path="*" element={<PageNotFound/>}/>
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
        <React.Suspense fallback={<div>Loading...</div>}>
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
