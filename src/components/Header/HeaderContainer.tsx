import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";

type HeaderContainerType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type mapDispatchToPropsType = {
    getAuthUserData: () => void
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType, HeaderContainerType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {

        return (
            <Header
                isAuth={this.props.isAuth}
                login={this.props.login}
                logout={this.props.logout}
            />
        )

    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login,
})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)
