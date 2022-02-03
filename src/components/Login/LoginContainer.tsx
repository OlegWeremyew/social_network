import React from 'react';
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";
import {Login} from "./Login";

type mapStateToPropsType = {
    isAuth: boolean
}
type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type LoginContainerType = mapDispatchToPropsType & mapDispatchToPropsType

class LoginAPIContainer extends React.Component<LoginContainerType> {

    // componentDidMount() {
    //     this.props.getAuthUserData()
    // }

    render() {
        return (
            <Login {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export const LoginContainer = connect(mapStateToProps, {
    login
})(LoginAPIContainer)