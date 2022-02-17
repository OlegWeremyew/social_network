import React from 'react';
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";
import {Login} from "./Login";

class LoginAPIContainer extends React.Component<LoginContainerType, LoginContainerType> {

    render() {
        return (
            <Login
            isAuth={this.props.isAuth}
            login={this.props.login}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export const LoginContainer = connect(mapStateToProps, {
    login
})(LoginAPIContainer)


//Types================================================================

type mapStateToPropsType = {
    isAuth: boolean
}
type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type LoginContainerType = mapStateToPropsType & mapDispatchToPropsType