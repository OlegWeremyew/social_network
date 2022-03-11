import React from 'react';
import c from './App.module.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import News from "./components/MainWindow/News/News";
import Music from "./components/MainWindow/Music/Music";
import Friends from "./components/MainWindow/Friends/Friends";
import Settings from "./components/MainWindow/Settings/Settings";
import {UsersContainer} from "./components/MainWindow/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/AppReducer";
import {AppStateType, store} from "./redux/reduxStore";
import {Preloader} from "./common/Preloader/Preloader";

const MessagesContainer = React.lazy(() => import('./components/MainWindow/Messages/MessagesContainer'));
const ProfileContainer = React.lazy(() => import('./components/MainWindow/Profile/ProfileContainer'));

class App extends React.Component<AppContainerType, AppContainerType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <main className={c.appContent}>
                <HeaderContainer/>
                <Navbar/>
                <div className={c.appContentWindow}>
                    <Routes>
                        <Route path="/" element={<Navigate to="profile"/>}/>
                        <Route path="/profile/" element={<ProfileContainer/>}>
                            <Route path=":userId" element={<ProfileContainer/>}/>
                        </Route>

                        <Route path="/messages/" element={<MessagesContainer/>}>
                            <Route path=":userId" element={<MessagesContainer/>}/>
                        </Route>

                        <Route path="/users/*" element={<UsersContainer/>}/>
                        <Route path="/news/*" element={<News/>}/>
                        <Route path="/music/*" element={<Music/>}/>
                        <Route path="/settings/*" element={<Settings/>}/>
                        <Route path="/friends/*" element={<Friends/>}/>
                        <Route path="/login" element={<LoginContainer/>}/>
                        <Route path="*" element={<h1>404. Page not found</h1>}/>

                    </Routes>
                </div>
                <Footer/>
            </main>
        );

    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

const AppContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    initializeApp,
})(App);

export const MainApp = () => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </BrowserRouter>
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
