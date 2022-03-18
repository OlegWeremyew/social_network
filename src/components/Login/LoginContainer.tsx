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
                captchaUrl={this.props.captchaUrl}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export const LoginContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    login
})(LoginAPIContainer)


//Types================================================================

type mapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginContainerType = mapStateToPropsType & mapDispatchToPropsType