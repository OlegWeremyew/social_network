import React from 'react';
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";
import {Login} from "./Login";
import {Nullable} from "../../types/Nullable";

class LoginAPIContainer extends React.Component<LoginContainerType, LoginContainerType> {

    render() {

        return (
            <Login
                isAuth={this.props.isAuth}
                login={this.props.login}
                captchaUrl={this.props.captchaUrl}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

const LoginContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    login
})(LoginAPIContainer)

export default LoginContainer

//Types================================================================

type mapStateToPropsType = {
    isAuth: boolean
    captchaUrl: Nullable<string>
}

type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginContainerType = mapStateToPropsType & mapDispatchToPropsType